var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/newdb";

MongoClient.connect(url,{ useUnifiedTopology: true }, 
    function(err, db) {
    if (err) throw err;
    var dbobj=db.db("newdb");
    
    dbobj.collection("students").find({},
        {projection:{_id:0, name:1}}).toArray(function(err,res)
    {
        if (err)throw err;
        console.log(res);
        db.close();
    });
});