var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    var dbobj=db.db("newdb");
    var mydoc=[
        {_id:"uki01", name: "Raam", age:24, place:"Mullaitivu"},
        {_id:"uki02", name: "thasee", age:20, place:"Jaffna"},
        {_id:"uki03", name: "shagira", age:23, place:"Jaffna"},
        {_id:"uki04", name: "venu", age:20, place:"Mullaitivu"}
    ];
    dbobj.collection("students").insertMany(mydoc,function(err,res){
        if (err)throw err;
        console.log(res);//it used for our purpose.... no need to use this code ok
        console.log("Number of Document inserted "+res.insertedCount);
        db.close();
    });
});