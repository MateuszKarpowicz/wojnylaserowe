#!/bin/bash
# Security audit script

set -e

echo "🔒 Running security audit..."

# Check for security vulnerabilities in dependencies
echo "📦 Checking npm dependencies for vulnerabilities..."
npm audit --audit-level=moderate

# Check for outdated packages
echo "🔄 Checking for outdated packages..."
npm outdated || echo "All packages are up to date"

# Check for known security issues in Docker images
echo "🐳 Scanning Docker images for vulnerabilities..."
if command -v trivy &> /dev/null; then
    trivy image wojny-laserowe:latest
else
    echo "⚠️ Trivy not installed. Install with: brew install trivy"
fi

# Check for secrets in code
echo "🔍 Scanning for potential secrets..."
if command -v trufflehog &> /dev/null; then
    trufflehog filesystem . --no-verification
else
    echo "⚠️ TruffleHog not installed. Install with: brew install trufflehog"
fi

# Check file permissions
echo "📁 Checking file permissions..."
find . -name "*.env*" -exec ls -la {} \;
find . -name "*.key" -exec ls -la {} \;
find . -name "*.pem" -exec ls -la {} \;

# Check for hardcoded secrets
echo "🔐 Checking for hardcoded secrets..."
grep -r "password\|secret\|key\|token" --include="*.js" --include="*.json" --include="*.md" . | grep -v node_modules | grep -v ".git" || echo "No obvious hardcoded secrets found"

# Check SSL/TLS configuration
echo "🔒 Checking SSL/TLS configuration..."
if [ -f "docker/nginx/ssl/cert.pem" ]; then
    openssl x509 -in docker/nginx/ssl/cert.pem -text -noout | grep -E "Not After|Subject:|Issuer:"
else
    echo "⚠️ SSL certificate not found"
fi

# Check Docker security
echo "🐳 Checking Docker security..."
if command -v docker &> /dev/null; then
    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy:latest image wojny-laserowe:latest
else
    echo "⚠️ Docker not available"
fi

echo "✅ Security audit completed!"
echo ""
echo "📋 Security checklist:"
echo "  - [ ] All dependencies updated"
echo "  - [ ] No critical vulnerabilities"
echo "  - [ ] No secrets in code"
echo "  - [ ] Proper file permissions"
echo "  - [ ] SSL certificates valid"
echo "  - [ ] Docker images secure"
