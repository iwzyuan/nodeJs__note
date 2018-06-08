var express = require('express');
var app = express();
/*
* 中间件流程
* 1.每个中间件都可以控制流程是否进行
* 2.req res 相同对象
* 3.如果出错了,转交错误处理中间件处理
* */
//中央
app.use(function (req,res,next) {
    req.mny = 100;
    next();
})
//省
app.use(function (req,res,next) {
    req.mny = req.mny-10;
    next();
})
//市
app.use(function (req,res,next) {
    req.mny = req.mny-10;
    next();
})
app.all('*',function (req,res) {
    console.log(typeof req.mny);
    res.send(""+req.mny);
})
app.listen(8080)