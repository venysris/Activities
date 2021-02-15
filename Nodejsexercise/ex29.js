//delete many document
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/newdb";

MongoClient.connect(url,{ useUnifiedTopology: true }, 
    function(err, db) {
    if (err) throw err;
    var dbobj=db.db("newdb");
    var query={name:/^R/};
    dbobj.collection("students").deleteMany(query, function(err,res)
    {
        if (err)throw err;
        console.log(res.result.n+"documents deleted.");
        db.close();
    });
});