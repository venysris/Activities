var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/newdb";

MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    var dbobj=db.db("newdb");
    
    dbobj.collection("students").findOne({}, function(err,res)
    {
        if (err)throw err;
        console.log(res);//it used for our purpose.... no need to use this code ok
        console.log("Number of Document inserted "+res.insertedCount);
        db.close();
    });
});