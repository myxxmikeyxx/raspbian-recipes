var express = require('express');
var port = process.env.PORT || 80;
var app = express(),
path = require('path'),
publicDir = path.join(__dirname,'public');

app.use(express.static(publicDir))

app.get('/modelview', function(req, res) {
  res.sendFile(publicDir + '/ModelViewPage.html');
});

module.exports = app;

// Listen on port 3000, IP defaults to 127.0.0.1

var server = require('http').Server(app);

server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');