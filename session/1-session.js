var express = require('express');
var cookieParser = require('cookie-parser')
var session = require('express-session');
var uuid = require('uuid');
var app = express();
app.use(cookieParser())
app.listen(8080)
app.use(mysession());
function mysession() {
    var data = {};
    return function (req,res,next) {
        var id = req.cookies['connect.sid'] || uuid.v4()
        res.cookie('connect.sid',id,{
            maxAge:60*1000
        })
        req.session = data[id]||{};
        //当响应结束的时候要把处理函数修改的session保存回data
        res.on('finish',function () {
            data[id] = req.session;
        })
        next();
    }
}