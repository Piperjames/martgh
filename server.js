var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb')
var ObjectID = mongodb.ObjectID;

var app = express();
var distDir = __dirname + "/dist/martgh";
app.use(bodyParser.json());
app.use(express.static(distDir));
app.set("view engine", "html")

var db;

mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/martgh", function(err, client){
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


app.get('/', function(req, res){
    res.render('index')
})