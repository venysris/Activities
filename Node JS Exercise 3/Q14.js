var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useUnifiedTopology: true }, 
    function(err, db) {
    if (err) throw err;
    var dbobj=db.db("student");
    var query={name:"kumaran"};
    dbobj.collection("studentmarks").deleteOne(query, function(err,res)
    {
        if (err)throw err;
        console.log(res.result.n+"documents deleted.");
        db.close();
    });
});