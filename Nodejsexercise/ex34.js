var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useUnifiedTopology: true }, 
    function(err, db) {
        if(err)throw err;
        var dbobj=db.db("newdb");

        dbobj.dropCollection("students",function(err,del){
            if(err)throw err;
            if(del) console.log("deleted")
            db.close();
        });
});