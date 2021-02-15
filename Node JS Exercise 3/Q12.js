var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    var dbobj=db.db("student");
    var myobj={name:"John", maths_marks:87, english_marks:23};
    dbobj.collection("studentmarks").insertOne(myobj,function(err,res){
        if (err)throw err;
        console.log(res);
        console.log("Number of Document inserted "+res.insertedCount);
        db.close();
    });
});