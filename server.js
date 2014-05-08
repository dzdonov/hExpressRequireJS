var express  = require('express');
var http     = require('http');

var app = express();

app.use(express.static(__dirname + '/public'));
//__dirname is a node global

// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });

var server = http.createServer(app);

app.set('port', process.env.PORT || 3000);
server.listen(app.get('port'), function() {
  console.log('the server is running on port ', app.get('port'));
});
