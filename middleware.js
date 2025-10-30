// Security middleware for Next.js

import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

// Rate limiting store
// Production: uses Redis via REDIS_URL env var
// Development: falls back to in-memory Map
let rateLimitStore = null;
let Redis = null;

// Initialize rate limiting store
async function initRateLimitStore() {
  if (rateLimitStore !== null) return; // Already initialized

  const redisUrl = process.env.REDIS_URL;
  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction && redisUrl) {
    try {
      // Dynamic import to avoid breaking if ioredis not installed
      // Using eval to prevent bundler from trying to resolve at build time
      const ioredisModule = await import('ioredis').catch(() => null);

      if (!ioredisModule) {
        throw new Error('ioredis module not available');
      }

      Redis = ioredisModule.default;
      const redis = new Redis(redisUrl);

      // Test connection with timeout
      await Promise.race([
        redis.ping(),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Redis ping timeout')), 2000)
        ),
      ]);

      rateLimitStore = {
        type: 'redis',
        client: redis,
      };

      logger.log('✅ Rate limiting: Using Redis');
    } catch (error) {
      logger.warn(
        '⚠️ Redis connection failed, falling back to Map:',
        error.message
      );
      rateLimitStore = new Map();
      rateLimitStore.type = 'map';
    }
  } else {
    // Development fallback or Redis not configured
    rateLimitStore = new Map();
    rateLimitStore.type = 'map';

    if (isProduction && !redisUrl) {
      logger.warn(
        '⚠️ REDIS_URL not configured in production. Using in-memory Map (NOT RECOMMENDED)'
      );
    }
  }
}

// Rate limiting configuration
const rateLimits = {
  '/api/auth/': { limit: 5, window: 60 * 1000 }, // 5 requests per minute
  '/api/': { limit: 100, window: 60 * 1000 }, // 100 requests per minute
  '/': { limit: 1000, window: 60 * 1000 }, // 1000 requests per minute
};

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';

  // Security headers
  const response = NextResponse.next();

  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Rate limiting (async)
  const rateLimitResult = await checkRateLimit(pathname, ip);
  if (!rateLimitResult.allowed) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': Math.ceil(rateLimitResult.resetTime / 1000).toString(),
        'X-RateLimit-Limit': rateLimitResult.limit.toString(),
        'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        'X-RateLimit-Reset': new Date(
          Date.now() + rateLimitResult.resetTime
        ).toISOString(),
      },
    });
  }

  // Add rate limit headers
  response.headers.set('X-RateLimit-Limit', rateLimitResult.limit.toString());
  response.headers.set(
    'X-RateLimit-Remaining',
    rateLimitResult.remaining.toString()
  );
  response.headers.set(
    'X-RateLimit-Reset',
    new Date(Date.now() + rateLimitResult.resetTime).toISOString()
  );

  // Input sanitization for API routes
  if (pathname.startsWith('/api/')) {
    const sanitizedUrl = sanitizeUrl(request.url);
    if (sanitizedUrl !== request.url) {
      return new NextResponse('Bad Request', { status: 400 });
    }
  }

  return response;
}

async function checkRateLimit(pathname, ip) {
  await initRateLimitStore();

  const now = Date.now();
  const config = getRateLimitConfig(pathname);

  if (!config) {
    return { allowed: true, limit: 0, remaining: 0, resetTime: 0 };
  }

  const key = `ratelimit:${ip}:${pathname}`;
  const windowStart = now - config.window;

  // Use Redis if available, otherwise fallback to Map
  if (rateLimitStore.type === 'redis') {
    try {
      const client = rateLimitStore.client;

      // Get existing requests
      const requestsStr = await client.get(key);
      const requests = requestsStr ? JSON.parse(requestsStr) : [];

      // Filter old requests
      const validRequests = requests.filter(time => time > windowStart);

      if (validRequests.length >= config.limit) {
        return {
          allowed: false,
          limit: config.limit,
          remaining: 0,
          resetTime: config.window - (now - validRequests[0]),
        };
      }

      // Add current request
      validRequests.push(now);

      // Store with expiration
      await client.setex(
        key,
        Math.ceil(config.window / 1000),
        JSON.stringify(validRequests)
      );

      const remaining = Math.max(0, config.limit - validRequests.length);

      return {
        allowed: true,
        limit: config.limit,
        remaining: remaining - 1,
        resetTime: config.window,
      };
    } catch (error) {
      logger.error('Redis rate limit error:', error);
      // Fallback to Map on Redis error
      rateLimitStore = new Map();
      rateLimitStore.type = 'map';
    }
  }

  // Fallback: In-memory Map (development or Redis unavailable)
  const storeMap = rateLimitStore instanceof Map ? rateLimitStore : new Map();

  if (storeMap.has(key)) {
    const requests = storeMap.get(key).filter(time => time > windowStart);
    storeMap.set(key, requests);
  } else {
    storeMap.set(key, []);
  }

  const requests = storeMap.get(key);
  const remaining = Math.max(0, config.limit - requests.length);

  if (requests.length >= config.limit) {
    return {
      allowed: false,
      limit: config.limit,
      remaining: 0,
      resetTime: config.window - (now - requests[0]),
    };
  }

  // Add current request
  requests.push(now);

  return {
    allowed: true,
    limit: config.limit,
    remaining: remaining - 1,
    resetTime: config.window,
  };
}

function getRateLimitConfig(pathname) {
  for (const [pattern, config] of Object.entries(rateLimits)) {
    if (pathname.startsWith(pattern)) {
      return config;
    }
  }
  return null;
}

function sanitizeUrl(url) {
  try {
    const urlObj = new URL(url);

    // Remove potentially dangerous query parameters
    const dangerousParams = ['<script', 'javascript:', 'data:', 'vbscript:'];
    const params = new URLSearchParams(urlObj.search);

    for (const [key, value] of params) {
      const lowerValue = value.toLowerCase();
      if (dangerousParams.some(dangerous => lowerValue.includes(dangerous))) {
        params.delete(key);
      }
    }

    urlObj.search = params.toString();
    return urlObj.toString();
  } catch (error) {
    return url;
  }
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};
