const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Hello World - My first docker image");
});

server.listen(3000 || process.env.PORT);