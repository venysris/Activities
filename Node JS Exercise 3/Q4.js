var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useUnifiedTopology: true }, 
    function(err, db) {
    if (err) throw err;
    var dbobj=db.db("student");
    var query={name:"Mala"};
    var newquery={$inc:{maths_marks:+6}};
    dbobj.collection("studentmarks").updateOne(
        query,newquery,function(err,res)
    {
        if (err)throw err;
        console.log("documents updated");
        db.close();
    });
});