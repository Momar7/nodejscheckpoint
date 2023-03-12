var http = require('http'); 
var server = http.createServer(function (req, res) {   
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('<h1>Hello Node!!!</h1>');

});

server.listen(3000); 

console.log('Node.js web server at port 3000 is running..')