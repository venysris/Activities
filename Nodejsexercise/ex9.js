var fs=require("fs");
fs.writeFile("ukifile1.txt", "Helloo......",
function(err){
     if(err) throw err;
     console.log("created");
});
