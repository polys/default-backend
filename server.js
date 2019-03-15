const http = require('http');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    const statusCode = (req.url === '/healthz') ? 200 : (req.headers['x-code'] || 404);

    const body = http.STATUS_CODES[statusCode] || '';

    res.writeHead(statusCode, {
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Length': Buffer.byteLength(body),
        'Cache-Control': 'no-cache, no-store'
    });

    res.end(body);
});

server.listen(port, (err) => {
    if (!err) {
        console.log(`default backend listening on port ${port}`);
    }
});

process.on('SIGINT', () => {
    // terminated by Control-C
    process.exit(130 /* 128 + SIGINT */);
});
