// CSRF protection utilities
import crypto from 'crypto';

// Secret key for CSRF token generation (should be in environment variables)
const CSRF_SECRET =
  process.env.CSRF_SECRET || 'dev-csrf-secret-change-in-production';

// Store for CSRF tokens (in production, use Redis or database)
const csrfTokens = new Map();

// Generate CSRF token
export function getCsrfToken() {
  const token = crypto.randomBytes(32).toString('hex');
  const timestamp = Date.now();
  const signature = crypto
    .createHmac('sha256', CSRF_SECRET)
    .update(token + timestamp)
    .digest('hex');

  const fullToken = `${token}.${timestamp}.${signature}`;

  // Store token with expiration (15 minutes)
  csrfTokens.set(token, {
    timestamp,
    signature,
    expiresAt: timestamp + 15 * 60 * 1000, // 15 minutes
  });

  // Clean up expired tokens
  cleanupExpiredTokens();

  return fullToken;
}

// Verify CSRF token
export function verifyCsrfToken(token) {
  if (!token || typeof token !== 'string') {
    return false;
  }

  const parts = token.split('.');
  if (parts.length !== 3) {
    return false;
  }

  const [tokenPart, timestamp, signature] = parts;

  // Check if token exists in store
  const storedToken = csrfTokens.get(tokenPart);
  if (!storedToken) {
    return false;
  }

  // Check expiration
  if (Date.now() > storedToken.expiresAt) {
    csrfTokens.delete(tokenPart);
    return false;
  }

  // Verify signature
  const expectedSignature = crypto
    .createHmac('sha256', CSRF_SECRET)
    .update(tokenPart + timestamp)
    .digest('hex');

  if (signature !== expectedSignature) {
    return false;
  }

  // Token is valid, remove it to prevent reuse
  csrfTokens.delete(tokenPart);

  return true;
}

// Clean up expired tokens
function cleanupExpiredTokens() {
  const now = Date.now();
  for (const [token, data] of csrfTokens.entries()) {
    if (now > data.expiresAt) {
      csrfTokens.delete(token);
    }
  }
}

// Rate limiting for CSRF token requests
const csrfRateLimit = new Map();

export function checkCsrfRateLimit(ip) {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 10; // Max 10 CSRF token requests per minute per IP

  if (!csrfRateLimit.has(ip)) {
    csrfRateLimit.set(ip, []);
  }

  const requests = csrfRateLimit.get(ip);
  const windowStart = now - windowMs;

  // Remove old requests
  const validRequests = requests.filter(time => time > windowStart);
  csrfRateLimit.set(ip, validRequests);

  if (validRequests.length >= maxRequests) {
    return false;
  }

  // Add current request
  validRequests.push(now);

  return true;
}

// Middleware for CSRF protection
export function csrfMiddleware(request) {
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';

  // Check rate limit for CSRF token requests
  if (!checkCsrfRateLimit(ip)) {
    return NextResponse.json(
      { success: false, message: 'Too many CSRF token requests' },
      { status: 429 }
    );
  }

  return null; // No error, continue
}
