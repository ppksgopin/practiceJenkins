// Install required package first:
// npm install prom-client

const prometheus = require('prom-client');

// Create a Registry for metrics
const register = new prometheus.Registry();

// Add default metrics (CPU, memory, etc)
prometheus.collectDefaultMetrics({
  app: 'recycling-api',
  prefix: 'node_',
  timeout: 10000,
  register
});

// Create custom metrics
const httpRequestDuration = new prometheus.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.1, 5, 15, 50, 100, 500]
});

const httpRequestTotal = new prometheus.Counter({
  name: 'http_request_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'code']
});

register.registerMetric(httpRequestDuration);
register.registerMetric(httpRequestTotal);

module.exports = {
  register,
  httpRequestDuration,
  httpRequestTotal
};