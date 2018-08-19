var mongo = require('mongodb');
var monClient = mongo.MongoClient;

monClient.connect('mongodb://localhost:27017/fruits', function(err, db){
    if(err){
        console.log(err);
    }
    else{
        db.collection('apples').insert(
            {name: 'green apples', color: 'green'},
            function(err, res){
                if(err){
                    console.log(err);
                }
                else{
                    console.log(res);
                }
            }
        );
        db.collection('apples').remove(
            {'name': 'green apples'},
            function(err, res){
                if(err){
                    console.log(err);
                }
                else{
                    console.log('%s', res);
                }
                db.close();
            }
        );
    }
});