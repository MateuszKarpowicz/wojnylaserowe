#!/bin/bash
# Kubernetes deployment script

set -e

ENVIRONMENT=${1:-development}
NAMESPACE="wojny-laserowe-${ENVIRONMENT}"

echo "🚀 Deploying Wojny Laserowe to ${ENVIRONMENT} environment..."

# Check if kubectl is available
if ! command -v kubectl &> /dev/null; then
    echo "❌ kubectl not found. Please install kubectl."
    exit 1
fi

# Check if helm is available
if ! command -v helm &> /dev/null; then
    echo "❌ helm not found. Please install Helm."
    exit 1
fi

# Check cluster connection
echo "🔍 Checking cluster connection..."
kubectl cluster-info || {
    echo "❌ Cannot connect to Kubernetes cluster"
    exit 1
}

# Create namespace if it doesn't exist
echo "📁 Creating namespace ${NAMESPACE}..."
kubectl create namespace ${NAMESPACE} --dry-run=client -o yaml | kubectl apply -f -

# Deploy with Helm
echo "📦 Deploying with Helm..."
helm upgrade --install wojny-laserowe-${ENVIRONMENT} ./helm/wojny-laserowe \
    --namespace ${NAMESPACE} \
    --values ./helm/wojny-laserowe/values-${ENVIRONMENT}.yaml \
    --wait \
    --timeout=10m

# Check deployment status
echo "📊 Checking deployment status..."
kubectl get pods -n ${NAMESPACE}
kubectl get services -n ${NAMESPACE}
kubectl get ingress -n ${NAMESPACE}

# Show access information
echo ""
echo "✅ Deployment completed!"
echo ""
echo "🌐 Access information:"
echo "   - Namespace: ${NAMESPACE}"
echo "   - Pods: kubectl get pods -n ${NAMESPACE}"
echo "   - Services: kubectl get services -n ${NAMESPACE}"
echo "   - Logs: kubectl logs -f deployment/wojny-laserowe-${ENVIRONMENT} -n ${NAMESPACE}"
echo ""
echo "🔧 Useful commands:"
echo "   - Scale: kubectl scale deployment wojny-laserowe-${ENVIRONMENT} --replicas=3 -n ${NAMESPACE}"
echo "   - Restart: kubectl rollout restart deployment wojny-laserowe-${ENVIRONMENT} -n ${NAMESPACE}"
echo "   - Status: kubectl rollout status deployment wojny-laserowe-${ENVIRONMENT} -n ${NAMESPACE}"
