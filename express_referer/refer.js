/*
* 图片防盗链
*
* */
var express = require('express');
var path = require('path')
var app = express();
app.listen(80)
/*
* 判断用户是否有权限访问此图片
* */
app.use('/img',function (req,res,next) {
    var referer = req.headers.referer;
    if (!referer){
        next();
    }
    /*
    * refer当前的主机host名称
    * */
    var referHost = require('url').parse(referer).host.split(':')[0];
    if (referHost === req.host){
        return next();
    }
    res.sendFile(path.join(__dirname,'img','wrong.jpg'))
})
app.use(express.static(__dirname))
//返回HTML
app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname,'img.html'))
})