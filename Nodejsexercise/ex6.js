var http = require("http");
var fs=require("fs");
http.createServer(function(req, res){
     fs.readFile("Uki Form.html", 
     function(err, data){
          res.writeHead(200, {"content-Type":"text/html"});
          res.write(data);//which data show to client
          res.end();
     }
     );
}).listen(8080);