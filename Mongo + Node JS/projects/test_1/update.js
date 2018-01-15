var mongo = require('mongodb');
var monClient = mongo.MongoClient;

monClient.connect('mongodb://localhost:27017/fruits', function(err, db){
    if(err){
        console.log(err);
    }
    else{
        db.collection('apples').update(
            {'name': 'red apples'},
            {$set: {'color': 'blue'}},
            function(err, res){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("update succesful");
                }
                db.close();
            }
        );
    }
});