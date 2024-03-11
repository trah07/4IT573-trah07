import * as http from 'http';
import { readFile, writeFile } from 'fs/promises';

async function updateCounter(increase) {
    try {
        let data = await readFile('counter.txt');
        let counter = parseInt(data);
        counter = increase ? counter + 1 : counter - 1;
        await writeFile('counter.txt', counter.toString());
        return counter;
    } catch (err) {
        if (err.code === 'ENOENT') {
            await writeFile('counter.txt', '0');
            return increase ? 1 : -1;
        } else {
            throw err;
        }
    }
}

async function readCounter() {
    try {
        let data = await readFile('counter.txt');
        return parseInt(data);
    } catch (err) {
        if (err.code === 'ENOENT') {
            await writeFile('counter.txt', '0');
            return 0;
        } else {
            throw err;
        }
    }
}

const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (url.pathname === '/increase') {
        try {
            let counter = await updateCounter(true);
            res.writeHead(200);
            res.end('OK. Number increased (+).');
        } catch (err) {
            res.writeHead(500);
            res.end('Internal Server Error');
        }
    } else if (url.pathname === '/decrease') {
        try {
            let counter = await updateCounter(false);
            res.writeHead(200);
            res.end('OK. Number decreased (-).');
        } catch (err) {
            res.writeHead(500);
            res.end('Internal Server Error');
        }
    } else if (url.pathname === '/read') {
        try {
            let counter = await readCounter();
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(counter.toString());
        } catch (err) {
            res.writeHead(500);
            res.end('Internal Server Error');
        }
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
