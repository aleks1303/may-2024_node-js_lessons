// Homework
// це http module

const http = require('node:http');

const bar = async () => {

// Create a local server to receive data from
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: 'Hello World!',
        }));
    });

    server.listen(8000);
}
void bar()







