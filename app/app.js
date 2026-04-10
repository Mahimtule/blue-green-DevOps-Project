const express = require('express');
const client = require('prom-client');

const app = express();
const register = new client.Registry();

client.collectDefaultMetrics({ register });

const httpRequests = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of requests',
});

register.registerMetric(httpRequests);

const version = process.env.APP_VERSION || "blue";

app.get('/', (req, res) => {
    httpRequests.inc();
    res.send(`Hello from ${version}`);
});

app.get('/health', (req, res) => {
    res.status(200).send("OK");
});

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
});

app.listen(3000, () => {
    console.log(`App running`);
});
