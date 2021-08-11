var express = require('express');
//  Creates express app object
var app = express();

console.log('Hello World');

// absolute path for index.html
const indexPath = __dirname + '/views/index.html' 
//  absolute path for public folder
const publicPath = __dirname + '/public'
//  json response object 
const jsonResponse = {"message": "Hello json"}

// allows access to public folder
app.use("/public", express.static(publicPath));

//  Serves index.html to get requests to the root directory
app.get('/', function(req, res) {
    res.sendFile(indexPath);
})

//  Serves json response object to get requests at /json path
app.get('/json', function(req, res) {
    res.json(jsonResponse);
})





































 module.exports = app;
