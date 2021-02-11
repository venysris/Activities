var fs=require("fs");
fs.appendFile("ukifile1.txt", "Hope you all good!!",
function(err){
     if(err) throw err;
     console.log("file created");
});
