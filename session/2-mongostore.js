var app = require('express')();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var uuid = require('uuid');
app.use(cookieParser())
app.listen(8080);
var FileStore = require('./filestore')(session)
app.use(session({
    secret : 'iwzy',
    resave : true,
    saveUninitialized:true,
    store : new FileStore()
}))

app.get('/save',function (req,res) {
    req.session.name = 'iwzyuan';
    res.end('end')
})
app.get('/read',function (req,res) {
    console.log(req.cookies);
    res.end(req.session.name)
})
/*
var app = require('express')();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var uuid = require('uuid');
var MongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');
mongoose.connect('')
app.use(cookieParser())
app.listen(8080);
app.use(session({
    secret : 'iwzy',//secret用来防止篡改cookie
    key : 'iwzy',//key的值为cookie的名字
    cookie : {maxAge:1000*60*60*24*30}, //设定cookie过期时间
    resave : true,
    saveUninitialized:true,
    store : new MongoStore()
}))

app.get('/',function (req,res) {
    if (req.session.sign){
        req.session.count++;
        res.send(req.session.name+'欢迎！第'+req.session.count+'次登陆');
    } else {
        req.session.sign = true;
        req.session.name = "吴仲圆"
        req.session.count = 1;
        res.send('欢迎登陆')
    }
})*/
