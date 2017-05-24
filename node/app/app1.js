// import the express module
var express = require('express')
// import the path module
var path = require('path')
// create an express app (server)
var app = express()
// specify the folder in which the static files are kept
app.use(express.static('public'));

// serve static HTML files for different URLs
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})
app.get('/anotherpage', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/second.html'));
});
app.get('/onemore', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/third.html'));
});

// start the server
app.listen(8000, function () {
    console.log('App listening on port 8000!!')
})