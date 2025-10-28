#!/bin/bash
# Docker build script

set -e

echo "🐳 Building Docker image..."

# Build the image
docker build -t wojny-laserowe:latest .

echo "✅ Docker image built successfully!"

# Show image info
echo "📊 Image information:"
docker images wojny-laserowe:latest

echo "🚀 Ready to run with: docker run -p 3000:3000 wojny-laserowe:latest"
