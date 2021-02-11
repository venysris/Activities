var fs=require("fs");
fs.rename("veny.txt", "love.txt",function(err){
     if(err) throw err;
     console.log("deleted");
});
