var http = require("http");

http.createServer(function(req, res){
    res.writeHead(200, {"content-type":"text/html"});
    res.write("Welcome to Uki, I am Veny Sriskantharaja");
    res.end();
}).listen(8080);
