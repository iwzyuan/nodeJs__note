/*
* npm install ejs
*
* */
var fs = require('fs')
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.set('view engine','html');
app.set('views',__dirname);
app.engine('html',require('ejs').__express);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.post('/post',function (req,res) {
    console.log(req.body);
    res.send(req.body);
})


app.listen(8080)