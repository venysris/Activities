var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useUnifiedTopology: true }, 
    function(err, db) {
    if (err) throw err;
    var dbobj=db.db("student");
    var query={name:"Raam"};
    var newquery={$unset:{science_marks:88}};
    dbobj.collection("studentmarks").updateOne(
        query,newquery,function(err,res)
    {
        if (err)throw err;
        console.log("documents deleted");
        db.close();
    });
});