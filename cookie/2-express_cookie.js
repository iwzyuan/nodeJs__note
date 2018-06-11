var express = require('express');
var cookieParser = require('cookie-parser')
var app =express();
var querystring = require('querystring')
app.listen(8080);
// app.use(cookieParser());
/*-------------------------------------------------
* 以下为cookie-parser实现原理
*
* */
app.use(function (req,res,next) {
    /*
    * 转对象querystring.parse
    * */
    req.cookies = querystring.parse(req.headers.cookie,'; ','=');
    console.log(req.cookies);
    req.cookie = cookie;
    next();
})
function cookie(name,val,options){
    var opt = options || {};
    var parts = [name+'='+val];
    if (null != opt.maxAge){
        parts.push('Max-Age='+Number(maxAge));
    }
    if (opt.domain){
        parts.push('Domain='+Number(maxAge));
    }
    if (opt.path){
        parts.push('Path='+Number(maxAge));
    }
    if (opt.expires){
        parts.push('Expires='+opt.expires.toUTCString());
    }
    if (opt.httpOnly){
        parts.push('HttpOnly');
    }
    return parts.json('; ')
}
/*-------------------------------------------------*/
app.get('/',function (req,res) {
    /*
    * req.cookies => 返回一个cookie对象
    * req.cookie(value,key,option)  => 设置客户端cookie
    *
    * */
    if (req.cookies.visited){
        res.send("欢迎老朋友")
    } else{
        res.cookie('visited',1,{maxAge:10*60*1000});//maxAge:过期时间
        res.send("欢迎新朋友")
    }
})