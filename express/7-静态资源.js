/*
* npm install ejs
*
* */
var fs = require('fs')
var express = require('express');
var path = require('path')
var app = express();
app.set('view engine','html');
app.set('views',__dirname);
app.engine('html',require('ejs').__express);

app.get('/',function (req,res) {
    res.render('index',{
        name : 'iwzyuan',
        age : 6
    })
})
app.use(express.static(path.join(__dirname,'public')));
/*
* 中间件express.static原理
* */
/*app.use(function (req,res,next) {
    console.log(req.path);
    var rs = fs.createReadStream(path.join(__dirname,'public',req.path));
    rs.pipe(res);
})*/
app.listen(8080)