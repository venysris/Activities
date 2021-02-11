var fs=require("fs");
fs.unlink("ukifile1.txt",function(err){
     if(err) throw err;
     console.log("deleted");
});
