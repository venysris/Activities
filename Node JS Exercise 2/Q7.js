var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useUnifiedTopology: true }, 
    function(err, db) {
    if (err) throw err;
    var dbobj=db.db("music");
    var query={"Song name":"Roja Poonthottam"};
    dbobj.collection("songdetails").deleteOne(query, function(err,res)
    {
        if (err)throw err;
        console.log("1 song deleted");
        db.close();
    });
});