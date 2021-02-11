var http = require("http");
var url=require("url");
var fs=require("fs")
http.createServer(function(req,res){
     var obj=url.parse(req,url,true);
     var filename="."+obj.pathname;
     fs.readFile(filename,function(err,data)
     {
          if (err) {
               res.writeHead(404,{"Content-type":"text/html"});
               return res.end("404 Not Found");
          }
          res.writeHead(404,{"Content-Type":"text/html"});
          res.write(data);
          returnres.end();
     });
}).listen(8080);