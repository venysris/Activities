//update many
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/newdb";

MongoClient.connect(url,{ useUnifiedTopology: true }, 
    function(err, db) {
    if (err) throw err;
    var dbobj=db.db("newdb");
    var query={age:20};
    var newquery={$set:{age:22}};
    dbobj.collection("students").updateMany(query,newquery,function(err,res)
    {
        if (err)throw err;
        console.log(res.result.nModified+"documents updated");
        db.close();
    });
});