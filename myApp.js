var express = require('express');
//  Creates express app object
var app = express();

console.log('Hello World');

// absolute path for index.html
const absolutePath = __dirname + '/views/index.html' 

//  Serves index.html to get requests to the root directory
app.get('/', function(req, res) {
    res.sendFile(absolutePath);
})



































 module.exports = app;
