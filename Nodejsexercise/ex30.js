//update one
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/newdb";

MongoClient.connect(url,{ useUnifiedTopology: true }, 
    function(err, db) {
    if (err) throw err;
    var dbobj=db.db("newdb");
    var query={name:"thasee"};
    var newquery={$set:{name:"thaseekaran"}};
    dbobj.collection("students").updateOne(query,newquery,function(err,res)
    {
        if (err)throw err;
        console.log("documents updated");
        db.close();
    });
});