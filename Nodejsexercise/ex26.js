var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/newdb";

MongoClient.connect(url,{ useUnifiedTopology: true }, 
    function(err, db) {
    if (err) throw err;
    var dbobj=db.db("newdb");
    /*acending order 1
    var query={name:1};*/
    //decending -1
    var query={name:-1};
    dbobj.collection("students").find().sort(query)
    .toArray(function(err,res)
    {
        if (err)throw err;
        console.log(res);
        db.close();
    });
});