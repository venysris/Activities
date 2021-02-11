var fs=require("fs");
fs.unlink("ukinodejsexercise1.txt",function(err){
    if(err) throw err;
    console.log("File deleted");
});