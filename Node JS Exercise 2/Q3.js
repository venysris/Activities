var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    var dbobj=db.db("music");
    var myobj=[
        {"Song name":"Thaniye Thananthaniye", "Film":"Rhythm", "Music Director":"A.R.Rahman", "Singer":"Shankarmahadevan"},
        {"Song name":"Evano Oruvan", "Film":"Alai Payuthey", "Music Director":"A.R.Rahman", "Singer":"Swarnalatha"},
        {"Song name":"Roja Poonthottam", "Film":"Kannukkul Nilavu", "Music Director":"Ilaiyaraaja", "Singer":["Unnikrishnan", "Anuradha Sriram"]},
        {"Song name":"Vennilavae Vennilavae Vinnaithaandi", "Film":"Minsara Kanavu", "Music Director":"A.R.Rahman", "Singer":["Hariharan", "Sadhana Sargam"]},
        {"Song name":"Sollamal Thottu Chellum Thendral", "Film":"Dheena", "Music Director":"Yuvan Shankar Raja", "Singer":"Hariharan"}
    ];
    dbobj.collection("songdetails").insertMany(myobj,function(err,res){
        if (err)throw err;
        console.log(res);
        console.log("Number of Document inserted "+res.insertedCount);
        db.close();
    });
});