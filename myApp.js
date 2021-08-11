var express = require('express');
//  Creates express app object
var app = express();

console.log('Hello World');

//  Serves string to get requests to the root directory
app.get('/', function(req, res) {
    res.send('Hello Express');
})



































 module.exports = app;
