var express = require('express');
var router = express.Router();
var app = express();
var morgan = require('morgan');
var port = 2000;


app.use(morgan('dev'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port);
console.log('Server running on port ' + port);
