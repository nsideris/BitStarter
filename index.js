var express = require('express')
var app = express();
var fs=require("fs");
var filename="./index.html";
var data=fs.readFile(filename,"utf8");

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(data)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
