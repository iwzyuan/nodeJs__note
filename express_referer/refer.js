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
    var whiteList = ['www.jywy.com'];//设置白名单
    var referer = req.headers.referer;
    console.log('referer',referer)
    if (!referer){
        next();
    }
    var referHost = require('url').parse(referer).host.split(':')[0];
    /*
    * 当前访问的主机名，图片访问相当于引用referHost相当于图片请求的主机名
    * req.host =》 页面中图片的访问主机名
    * referHost => 当前页面的主机名
    * */

    /*
    * 设置白名单，将图片请求主机名加入其中
    * */
    var _blog = whiteList.indexOf(req.host)<0 ? false : true;
    if (referHost === req.host || _blog){
        next();
    }else {
        res.sendFile(path.join(__dirname,'img','wrong.jpg'))
    }

})
/*
* 静态文件中间见
*
* */
app.use(express.static(__dirname))
//返回HTML
app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname,'img.html'));
})