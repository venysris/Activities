var http=require("http");
var upper=require("upper-case");
http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write(upper.upperCase("Uki is the best place to learn programming!"));
    res.end();
}).listen(8000);