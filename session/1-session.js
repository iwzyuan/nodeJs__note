var express = require('express');
var cookieParser = require('cookie-parser');
/*
* session中间件安装
* */
var session = require('express-session');
var uuid = require('uuid');
var app = express();
app.use(cookieParser())
app.listen(8080);
/*app.use(session({
    secret : 'iwzy'
}))*/
/*--------------------------------------------------
* session实现
* */
 app.use(mysession());
function mysession(opt) {
    var options = opt || {}
    var data = {};
    return function (req,res,next) {
        var sid = options.name || 'connect.sid';
        var id = req.cookies[sid] || (options.genid?options.genid(): uuid.v4())
        res.cookie(sid,id,options.cookie||{
            maxAge:60*1000
        })
        req.session = data[id]||{};
        //当响应结束的时候要把处理函数修改的session保存回data
        res.on('finish',function () {
            if (options.saveUninitialized || Object.keys(req.session).length>0){
                    data[id] = req.session;
            }
        })
        next();
    }
}
/*--------------------------------------------------*/
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
})