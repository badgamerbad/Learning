var mongo = require('mongodb');
var monClient = mongo.MongoClient;

monClient.connect('mongodb://localhost:27017/fruits', function(err, db){
    if(err){
        console.log(err);
    }
    else{
        db.collection('apples').find().toArray(function(err, res){
            if(err){
                console.log(err);
            }
            else if(res.length){
                console.log(res);
            }
            else{
                console.log("No match found");
            }
            db.close();
        });
    }
});