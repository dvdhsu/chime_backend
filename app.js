var express = require('express');
var app = express();
var mongo = require('mongodb');
var monk = require('monk');
var db =  monk('localhost:27017/chime');
var bodyParser = require('body-parser');
var multer = require('multer');

var eventTestCollection = db.get('crimes');

// parse the body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(multer());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3100, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
