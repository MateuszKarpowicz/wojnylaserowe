// Security middleware for Next.js

import { NextResponse } from 'next/server';

// Rate limiting store (in production, use Redis)
const rateLimitStore = new Map();

// Rate limiting configuration
const rateLimits = {
  '/api/auth/': { limit: 5, window: 60 * 1000 }, // 5 requests per minute
  '/api/': { limit: 100, window: 60 * 1000 },   // 100 requests per minute
  '/': { limit: 1000, window: 60 * 1000 }        // 1000 requests per minute
};

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  
  // Security headers
  const response = NextResponse.next();
  
  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Rate limiting
  const rateLimitResult = checkRateLimit(pathname, ip);
  if (!rateLimitResult.allowed) {
    return new NextResponse('Too Many Requests', { 
      status: 429,
      headers: {
        'Retry-After': Math.ceil(rateLimitResult.resetTime / 1000).toString(),
        'X-RateLimit-Limit': rateLimitResult.limit.toString(),
        'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        'X-RateLimit-Reset': new Date(Date.now() + rateLimitResult.resetTime).toISOString()
      }
    });
  }
  
  // Add rate limit headers
  response.headers.set('X-RateLimit-Limit', rateLimitResult.limit.toString());
  response.headers.set('X-RateLimit-Remaining', rateLimitResult.remaining.toString());
  response.headers.set('X-RateLimit-Reset', new Date(Date.now() + rateLimitResult.resetTime).toISOString());
  
  // Input sanitization for API routes
  if (pathname.startsWith('/api/')) {
    const sanitizedUrl = sanitizeUrl(request.url);
    if (sanitizedUrl !== request.url) {
      return new NextResponse('Bad Request', { status: 400 });
    }
  }
  
  return response;
}

function checkRateLimit(pathname, ip) {
  const now = Date.now();
  const config = getRateLimitConfig(pathname);
  
  if (!config) {
    return { allowed: true, limit: 0, remaining: 0, resetTime: 0 };
  }
  
  const key = `${ip}:${pathname}`;
  const windowStart = now - config.window;
  
  // Clean old entries
  if (rateLimitStore.has(key)) {
    const requests = rateLimitStore.get(key).filter(time => time > windowStart);
    rateLimitStore.set(key, requests);
  } else {
    rateLimitStore.set(key, []);
  }
  
  const requests = rateLimitStore.get(key);
  const remaining = Math.max(0, config.limit - requests.length);
  
  if (requests.length >= config.limit) {
    return {
      allowed: false,
      limit: config.limit,
      remaining: 0,
      resetTime: config.window - (now - requests[0])
    };
  }
  
  // Add current request
  requests.push(now);
  
  return {
    allowed: true,
    limit: config.limit,
    remaining: remaining - 1,
    resetTime: config.window
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
