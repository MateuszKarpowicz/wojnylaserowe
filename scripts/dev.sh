#!/bin/bash
# Docker development script

set -e

echo "🚀 Starting development environment..."

# Check if docker-compose is available
if ! command -v docker-compose &> /dev/null; then
    echo "❌ docker-compose not found. Please install Docker Compose."
    exit 1
fi

# Start development environment
docker-compose up --build -d

echo "✅ Development environment started!"
echo ""
echo "📊 Services status:"
docker-compose ps

echo ""
echo "🌐 Application available at:"
echo "   - App: http://localhost:3000"
echo "   - Nginx: http://localhost:80"
echo "   - Database: localhost:5432"
echo "   - Redis: localhost:6379"
echo ""
echo "📝 Useful commands:"
echo "   - View logs: docker-compose logs -f"
echo "   - Stop: docker-compose down"
echo "   - Restart: docker-compose restart"
