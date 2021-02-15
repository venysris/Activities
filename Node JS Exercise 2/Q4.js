var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useUnifiedTopology: true }, 
    function(err, db) {
    if (err) throw err;
    var dbobj=db.db("music");
    
    dbobj.collection("songdetails").find({}).toArray(function(err,res)
    {
        if (err)throw err;
        console.log(res);
        db.close();
    });
});