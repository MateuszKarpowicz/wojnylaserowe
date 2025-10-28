#!/bin/bash
# Monitoring deployment script

set -e

echo "📊 Deploying monitoring stack..."

# Check if kubectl is available
if ! command -v kubectl &> /dev/null; then
    echo "❌ kubectl not found. Please install kubectl."
    exit 1
fi

# Create monitoring namespace
echo "📁 Creating monitoring namespace..."
kubectl create namespace monitoring --dry-run=client -o yaml | kubectl apply -f -

# Deploy Prometheus
echo "🔍 Deploying Prometheus..."
kubectl apply -f monitoring/prometheus/prometheus-config.yaml
kubectl apply -f monitoring/prometheus/prometheus-deployment.yaml
kubectl apply -f monitoring/prometheus/prometheus-service.yaml
kubectl apply -f monitoring/prometheus/prometheus-rules.yaml

# Deploy Grafana
echo "📈 Deploying Grafana..."
kubectl apply -f monitoring/grafana/grafana-config.yaml
kubectl apply -f monitoring/grafana/grafana-deployment.yaml
kubectl apply -f monitoring/grafana/grafana-service.yaml

# Deploy ELK Stack
echo "📝 Deploying ELK Stack..."
kubectl apply -f monitoring/elk/elasticsearch.yaml
kubectl apply -f monitoring/elk/logstash.yaml
kubectl apply -f monitoring/elk/logstash-config.yaml
kubectl apply -f monitoring/elk/kibana.yaml
kubectl apply -f monitoring/elk/elk-services.yaml

# Deploy AlertManager
echo "🚨 Deploying AlertManager..."
kubectl apply -f monitoring/alertmanager/alertmanager.yaml
kubectl apply -f monitoring/alertmanager/alertmanager-config.yaml

# Wait for deployments
echo "⏳ Waiting for deployments to be ready..."
kubectl wait --for=condition=available --timeout=300s deployment/prometheus -n monitoring
kubectl wait --for=condition=available --timeout=300s deployment/grafana -n monitoring
kubectl wait --for=condition=available --timeout=300s deployment/logstash -n monitoring
kubectl wait --for=condition=available --timeout=300s deployment/kibana -n monitoring
kubectl wait --for=condition=available --timeout=300s deployment/alertmanager -n monitoring

# Show status
echo "📊 Monitoring stack status:"
kubectl get pods -n monitoring
kubectl get services -n monitoring

# Show access information
echo ""
echo "✅ Monitoring stack deployed successfully!"
echo ""
echo "🌐 Access information:"
echo "   - Prometheus: kubectl port-forward svc/prometheus 9090:9090 -n monitoring"
echo "   - Grafana: kubectl port-forward svc/grafana 3000:3000 -n monitoring"
echo "   - Kibana: kubectl port-forward svc/kibana 5601:5601 -n monitoring"
echo "   - AlertManager: kubectl port-forward svc/alertmanager 9093:9093 -n monitoring"
echo ""
echo "🔑 Default credentials:"
echo "   - Grafana: admin / admin123"
echo ""
echo "🔧 Useful commands:"
echo "   - View logs: kubectl logs -f deployment/prometheus -n monitoring"
echo "   - Check metrics: kubectl port-forward svc/prometheus 9090:9090 -n monitoring"
echo "   - Access Grafana: kubectl port-forward svc/grafana 3000:3000 -n monitoring"
