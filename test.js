const http = require('http');


const server = http.createServer((req, res) => {

    if (req.url == "/") {
        console.log("Request for home received");
        res.writeHead(201, { 'Content-type': 'text/html' });
        res.write("<h1>Home Page</h1>");

    }
    else if (req.url == "/login") {
        console.log("Request for /login received");
        res.write("<h1>Login Page</h1>");

    }
});

server.listen(8181);
