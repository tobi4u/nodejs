const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello tobi.</h1>');
    res.end();
}).listen(666);


console.log("Server is running on http://localhost:666/");