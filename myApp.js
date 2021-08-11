var express = require("express");
//  Creates express app object
var app = express();

console.log("Hello World");

// absolute path for index.html
const indexPath = __dirname + "/views/index.html";
//  absolute path for public folder
const publicPath = __dirname + "/public";

// middleware
// allows access to public folder
app.use("/public", express.static(publicPath));

// logs all requests
app.use(function(req, res, next) {
    console.log(`{req.method} {req.path} - {req.ip}`);
    next();
})

// routes 

//  Serves index.html to get requests to the root directory
app.get("/", function(req, res) {
    res.sendFile(indexPath);
});

//  Serves json response object to get requests at /json endpoint
app.get("/json", function(req, res) {

  //  set json response object based on MESSAGE STYLE .env variable
let message = "Hello json";

if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase()
} 

const jsonResponse = { "message": message};

    res.json(jsonResponse);
});

module.exports = app;
