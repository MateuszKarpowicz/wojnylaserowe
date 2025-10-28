#!/bin/bash
# Docker production deployment script

set -e

echo "🚀 Deploying to production..."

# Check if .env.production exists
if [ ! -f .env.production ]; then
    echo "❌ .env.production file not found!"
    echo "Please create .env.production with production environment variables."
    exit 1
fi

# Load production environment
export $(cat .env.production | grep -v '^#' | xargs)

# Build production image
echo "🔨 Building production image..."
docker build -t wojny-laserowe:production .

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose -f docker-compose.prod.yml down

# Start production environment
echo "🚀 Starting production environment..."
docker-compose -f docker-compose.prod.yml up -d

# Wait for services to be ready
echo "⏳ Waiting for services to be ready..."
sleep 30

# Health check
echo "🏥 Performing health check..."
if curl -f http://localhost/health; then
    echo "✅ Production deployment successful!"
else
    echo "❌ Health check failed!"
    exit 1
fi

echo ""
echo "📊 Production services status:"
docker-compose -f docker-compose.prod.yml ps

echo ""
echo "🌐 Production application available at:"
echo "   - App: https://localhost"
echo "   - Health: https://localhost/health"
