
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http= require('http');
const express = require("express");
var bodyParser = require('body-parser');
var commands = require('./commandsecond.js');


const app =express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get("/", function(req, res){
    res.send('Mars Rover Challenge');
});

app.get("/form", function(req, res){res.sendfile("./views/form.html")});

app.post("/form", function(req, res){

        var commandfirst = req.body.commandfirst;
        var commandsecond = req.body.commandsecond;
        var orientation = req.body.orientation;
        var movement = req.body.movement;

        res.send('Output: '+ commands.moverover(orientation , movement, commandfirst  ,commandsecond));
    }
);

http.createServer(app).listen(3000);
