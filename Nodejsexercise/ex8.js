var fs=require("fs");
fs.open("ukifile1.txt", "w",
function(err, file){
     if(err) throw err;
     console.log("created");
});
