var http = require("http");

http.createServer(function(req, res){
     res.writeHead(200, {"content-type":"text/html"});
     res.end("Hello uki!!");
     res.write(req.url);
     res.end();
}).listen(8080);