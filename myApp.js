var express = require('express');
//  Creates express app object
var app = express();

console.log('Hello World');

// absolute path for index.html
const indexPath = __dirname + '/views/index.html' 
//  absolute path for public folder
const publicPath = __dirname + './public'

// allows access to public folder
app.use(express.static(publicPath));

//  Serves index.html to get requests to the root directory
app.get('/', function(req, res) {
    res.sendFile(indexPath);
})





































 module.exports = app;
