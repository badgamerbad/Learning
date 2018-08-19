const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://root:root@ds121309.mlab.com:21309/mongo-test-server-v1', (err, db) => {
        if(err)
            return console.log(err);
        closure(db);
    });
};

//error handling
const sendError = (err, res) => {
    response.status = '501';
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

//response handling
let response = {
    status: 200,
    data: [],
    message: null
};

//get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.post('/users', (req, res) => {
    connection((db) => {
        db.collection('users').insert({ "name": req.body.name })
            .then((obj) => {
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.delete('/users/:index', (req, res) => {
    connection((db) => {
        db.collection('users').remove({"_id": ObjectID(req.params.index)})
            .then((obj)=>{
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;