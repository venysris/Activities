var http = require("http");
var mydate=require("./ex4.js")
http.createServer(function(req, res){
     res.writeHead(200, {"content-type":"text/html"});
     res.write(mydate.DateTime());
     res.end();
}).listen(8000);