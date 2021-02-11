var url=require("url");
var adr="http://localhost:8080/home.htm?/year=2021&name=veny";
var obj=url.parse(adr,true);
console.log(obj);
console.log(obj.host);
console.log(obj.pathname);
console.log(obj.search);
var data=obj.query;
console.log()
