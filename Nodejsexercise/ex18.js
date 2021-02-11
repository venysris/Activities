var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    var dbobj=db.db("newdb");
    var mydoc={name: "veny", age:24, place:"Mullaitivu"};
    dbobj.collection("students").insertOne(mydoc,function(err,res){
        if (err)throw err;
        console.log("1 Document inserted");
        db.close();
    });
});