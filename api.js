const http = require('http');


const server = http.createServer((req, res) => {

    if (req.url == "/order") {
        console.log("into /order");
        console.log(req.method);
        res.writeHead(200, { 'Content-Type': 'Application/json' });
        res.write(JSON.stringify({ 'message': "hello World" }));


        res.end();

    }


});



server.listen(8000);


