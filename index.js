var express = require('express')
var app = express();
var fs=require('fs');
var filename="index.html";
var data=fs.readFileSynch(filename,'utf-8');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
var buf=new Buffer (data);
  response.send(buf.toString())
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
