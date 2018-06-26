/**
 * Created by harsh.vashisht on 26/06/2018.
 */
var express = require('express');
var app = express();

var port =3000;

app.listen(port, function (err, res) {
    if(err){
        console.log('Server error');
    }
    else {
        console.log('Server started at 8000');
    }

});
