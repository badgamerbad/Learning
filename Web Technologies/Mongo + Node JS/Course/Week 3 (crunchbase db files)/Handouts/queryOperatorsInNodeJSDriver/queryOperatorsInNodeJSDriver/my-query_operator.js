var MongoClient = require('mongodb').MongoClient,
    commandLineArgs = require('command-line-args'),
    assert = require('assert');

var options = commandLineOptions();

MongoClient.connect('mongodb://localhost:27017/crunchbase', function(err, db){
    assert.equal(err, null);
    console.log("Successfully connected to MongoDB.");

    var query = queryDocument(options);
    var projection = {"_id":1, "name": 1, "founded_year":1, "number_of_employees": 1, "crunchbase_url": 1};

    var cursor = db.collection('companies').find(query, projection);
    var numMatches = 0;

    cursor.forEach(
        function(doc){
            numMatches = numMatches + 1;
            console.log(doc);
        },
        function(err){
            assert.equal(err, null);
            console.log("Our query was: " + JSON.stringify(query));
            console.log("Matching document: " + numMatches);
            return db.close();
        }
    );
});

function queryDocument(options){
    console.log(options);
    var query = {
        "founded_year": {
            "$gte": options.firstYear,
            "$lte": options.lastYear
        }
    };

    if("employees" in options){
        query.number_of_employees = {"$gte": options.employees}
    }

    return query;
}