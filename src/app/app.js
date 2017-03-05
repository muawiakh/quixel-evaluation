var express = require('express');
var bodyParser = require('body-parser');
var conversion = require('./conversion.js');
var app = express();
var base_url = 'http://localhost:8080/';
var path = __dirname + '/views/';
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
global.resultMap = {};

app.get('/', function(req, res){
  res.sendFile(path + "index.html");
});

app.post('/abraCadabra', function (req, res) {
  var originalUrl = req.body.url;
  // random generation of a uuid used for mapping
  // could be any base 10 number
  global.urlTrackingId = Math.floor((Math.random() * 100000) + 1);
  base62id = conversion.encode(urlTrackingId); 
  shortUrl = base_url + base62id
  resultMap = {
    "id": urlTrackingId,
    "origUrl": originalUrl.toString(),
    "shortUrl": shortUrl.toString()
  }
  res.send({'shortUrl': shortUrl});
});

app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});

app.get('/:shortUrl', function(req, res){
  var base62id = req.params.shortUrl;
  var base10id = conversion.decode(base62id);
  if (resultMap.id == base10id) {
      res.redirect(resultMap.origUrl);
  }
  else {
    console.log("Test Failed!!! No Job offer!!");
  }
});

var server = app.listen(8080, function(){
  console.log('Server listening on port 8080');
});
