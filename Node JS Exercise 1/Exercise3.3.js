var fs=require("fs");
fs.appendFile("ukinode.txt", "Hope you all good!!",
function(err){
    if(err) throw err;
    console.log("file updated");
});