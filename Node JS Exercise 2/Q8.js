var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    var dbobj=db.db("music");
    var mydoc={"Song name":"Ninaiththu Ninaithu", "Film":"7G Rainbow Colony", "Music Director":"Yuvan Shankar Raja", "Singer":"Hariharan"};
    dbobj.collection("songdetails").insertOne(mydoc,function(err,res){
        if (err)throw err;
        console.log(res);
        console.log("1 Document inserted");
        db.close();
    });
});