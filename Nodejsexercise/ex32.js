var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useUnifiedTopology: true }, 
    function(err, db) {
        if(err)throw err;
        var dbobj=db.db("newdb");
        dbobj.collection("students").find()
        .limit(5).toArray(function(err,result){
            if(err)throw err;
            console.log(result);
            db.close();
        });
});