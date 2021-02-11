var fs=require("fs");
fs.rename("ukinode.txt", "ukinodejsexercise1.txt",function(err){
    if(err) throw err;
    console.log("sucessfully renamed");
});