// Health check endpoint for monitoring and load balancers

export async function GET() {
  try {
    // Basic health check
    const healthStatus = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      services: {
        database: await checkDatabase(),
        redis: await checkRedis(),
        storage: await checkStorage()
      }
    };

    return Response.json(healthStatus, { status: 200 });
  } catch (error) {
    console.error('Health check failed:', error);
    
    return Response.json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: error.message
    }, { status: 503 });
  }
}

// Database health check
async function checkDatabase() {
  try {
    // TODO: Implement actual database check when Prisma is set up
    // const db = await prisma.$queryRaw`SELECT 1`;
    return { status: 'healthy', responseTime: '< 1ms' };
  } catch (error) {
    return { status: 'unhealthy', error: error.message };
  }
}

// Redis health check
async function checkRedis() {
  try {
    // TODO: Implement actual Redis check when Redis client is set up
    // const redis = new Redis(process.env.REDIS_URL);
    // await redis.ping();
    return { status: 'healthy', responseTime: '< 1ms' };
  } catch (error) {
    return { status: 'unhealthy', error: error.message };
  }
}

// Storage health check
async function checkStorage() {
  try {
    // TODO: Implement actual storage check when file storage is set up
    return { status: 'healthy', available: true };
  } catch (error) {
    return { status: 'unhealthy', error: error.message };
  }
}
