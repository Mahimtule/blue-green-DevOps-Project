const http = require('http');

const version = process.env.VERSION || "v1";

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Hello from ${version}\n`);
});

server.listen(3000, () => {
    console.log(`Server running on port 3000 - ${version}`);
});
