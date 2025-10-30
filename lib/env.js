// Environment validation utility

const requiredEnvVars = [
  'NODE_ENV',
  'NEXTAUTH_SECRET',
  'NEXTAUTH_URL'
];

const optionalEnvVars = [
  'DATABASE_URL',
  'REDIS_URL',
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'UPLOAD_MAX_SIZE',
  'UPLOAD_ALLOWED_TYPES',
  'JWT_SECRET',
  'ENCRYPTION_KEY',
  'PROMETHEUS_PORT',
  'GRAFANA_PORT',
  'GOOGLE_ANALYTICS_ID',
  'STRIPE_SECRET_KEY',
  'STRIPE_PUBLISHABLE_KEY'
];

const featureFlags = [
  'FEATURE_NEW_GALLERY',
  'FEATURE_DARK_MODE',
  'FEATURE_NOTIFICATIONS',
  'FEATURE_OFFLINE_MODE'
];

export function validateEnvironment() {
  const errors = [];
  const warnings = [];

  // Check required environment variables
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      errors.push(`Missing required environment variable: ${envVar}`);
    }
  }

  // Check optional environment variables
  for (const envVar of optionalEnvVars) {
    if (!process.env[envVar]) {
      warnings.push(`Missing optional environment variable: ${envVar}`);
    }
  }

  // Validate specific values
  if (process.env.NODE_ENV && !['development', 'staging', 'production'].includes(process.env.NODE_ENV)) {
    errors.push('NODE_ENV must be one of: development, staging, production');
  }

  if (process.env.NEXTAUTH_SECRET && process.env.NEXTAUTH_SECRET.length < 32) {
    errors.push('NEXTAUTH_SECRET must be at least 32 characters long');
  }

  if (process.env.UPLOAD_MAX_SIZE && isNaN(parseInt(process.env.UPLOAD_MAX_SIZE))) {
    errors.push('UPLOAD_MAX_SIZE must be a valid number');
  }

  // Validate feature flags
  for (const flag of featureFlags) {
    if (process.env[flag] && !['true', 'false'].includes(process.env[flag])) {
      errors.push(`Feature flag ${flag} must be 'true' or 'false'`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

export function getEnvironmentConfig() {
  const validation = validateEnvironment();

  if (!validation.isValid) {
    throw new Error(`Environment validation failed: ${validation.errors.join(', ')}`);
  }

  return {
    nodeEnv: process.env.NODE_ENV || 'development',
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isStaging: process.env.NODE_ENV === 'staging',

    // Database
    databaseUrl: process.env.DATABASE_URL,

    // Redis
    redisUrl: process.env.REDIS_URL,

    // NextAuth
    nextAuthSecret: process.env.NEXTAUTH_SECRET,
    nextAuthUrl: process.env.NEXTAUTH_URL,

    // SMTP
    smtp: {
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },

    // File Upload
    upload: {
      maxSize: parseInt(process.env.UPLOAD_MAX_SIZE) || 10485760, // 10MB
      allowedTypes: process.env.UPLOAD_ALLOWED_TYPES?.split(',') || ['image/jpeg', 'image/png', 'image/webp']
    },

    // Security
    jwtSecret: process.env.JWT_SECRET,
    encryptionKey: process.env.ENCRYPTION_KEY,

    // Monitoring
    monitoring: {
      prometheusPort: parseInt(process.env.PROMETHEUS_PORT) || 9090,
      grafanaPort: parseInt(process.env.GRAFANA_PORT) || 3001
    },

    // API Keys
    apiKeys: {
      googleAnalytics: process.env.GOOGLE_ANALYTICS_ID,
      stripeSecret: process.env.STRIPE_SECRET_KEY,
      stripePublishable: process.env.STRIPE_PUBLISHABLE_KEY
    },

    // Feature Flags
    features: {
      newGallery: process.env.FEATURE_NEW_GALLERY === 'true',
      darkMode: process.env.FEATURE_DARK_MODE === 'true',
      notifications: process.env.FEATURE_NOTIFICATIONS === 'true',
      offlineMode: process.env.FEATURE_OFFLINE_MODE === 'true'
    }
  };
}

// Initialize environment validation on import
import { logger } from '@/lib/logger';

if (typeof window === 'undefined') { // Server-side only
  const validation = validateEnvironment();

  if (!validation.isValid) {
    logger.error('❌ Environment validation failed:');
    validation.errors.forEach(error => logger.error(`  - ${error}`));
  }

  if (validation.warnings.length > 0) {
    logger.warn('⚠️ Environment warnings:');
    validation.warnings.forEach(warning => logger.warn(`  - ${warning}`));
  }

  if (validation.isValid && validation.warnings.length === 0) {
    logger.log('✅ Environment validation passed');
  }
}
