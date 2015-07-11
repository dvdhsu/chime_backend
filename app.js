var express = require('express');
var app = express();
var mongo = require('mongodb');
var monk = require('monk');
var db =  monk('localhost:27017/chime');
var bodyParser = require('body-parser');
var multer = require('multer');
var url = require('url');

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

app.get('/echo', function (req, res) {
  var params = url.parse(req.url, true).query;

  params.start_address // this is your start address
  params.end_address // ...

  console.log("start address: " + params.start_address);
  console.log("end address: " + params.end_address);

  // now we somehow need to get directions from the Google Maps
  // api, then send them back via `res.send`

  res.send(params);
});

var server = app.listen(3100, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
