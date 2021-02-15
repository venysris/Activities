var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useUnifiedTopology: true }, 
    function(err, db) {
    if (err) throw err;
    var dbobj=db.db("student");
    var query={name:"Lucky"};
    var newquery={$set:{science_marks:75}};
    dbobj.collection("studentmarks").updateOne(
        query,newquery,function(err,res)
    {
        if (err)throw err;
        console.log("documents updated");
        db.close();
    });
});