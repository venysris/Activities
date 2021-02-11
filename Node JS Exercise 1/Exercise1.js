var http = require("http");
var mydata=require("./Q1.js")
http.createServer(function(req, res){
    res.writeHead(200, {"content-type":"text/html"});
    res.write("sum Number = "+ mydata.sumNum(123, 321));
    res.write("<br> Average Number is = "+mydata.average(123,321));
    res.end();
}).listen(8000);