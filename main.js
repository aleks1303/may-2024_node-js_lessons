// Homework
// це http module

const http = require('node:http');

const bar = async () => {

// Create a local server to receive data from
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        const url = req.url;
        if (url === '/about'){
            // в середині можна використовувати різні методи
            switch (req.method) {
                case 'GET': res.end(JSON.stringify({
                    data: 'About PRO Page!'
                }));

                case 'POST': res.end(JSON.stringify({
                    data: 'AboutPro Page!'
                }));
            }

        }
        if (url === '/contact'){
            res.end(JSON.stringify({
                data: 'Contact Page!'
            }));
            return
        }

        res.end(JSON.stringify({
            data: 'Hello World!',
        }));
    });

    server.listen(8000);
}
void bar()







