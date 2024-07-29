const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/books') {
        if (req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('GET request to /books');
        } else if (req.method === 'POST') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('POST request to /books');
        } else {
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end('Method Not Allowed');
        }
    } else if (req.url === '/others') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Others is working');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Backend is working');
    }
});

server.listen(8000, () => {
    console.log('Server has started on port 8000!');
});
