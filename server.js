var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb')
var ObjectID = mongodb.ObjectID;

var app = express();
app.use(bodyParser.json());

var MONGO_URI = process.env.MONGO_URI
var db;

mongodb.MongoClient.connect(MONGO_URI, function(err, client){
    if (err) {
        console.log(err);
        process.exit(1);
    }

    db = client.db();
    console.log("Database connection ready");

    var server = app.listen(process.env.PORT || 8080, function(){
        var port = server.address().port;
        console.log("App now running on port", port)
    })
})

function handleError(res, reason, message, code){
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}