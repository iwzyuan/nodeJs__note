/*
* 反向代理
* */
var express = require('express');
var http = require('http');
var url = require('url');
var fs = require('fs');

// var proxy = require('http-proxy').createProxyServer();

var app = express();
/*-----------------------------------*/
function proxyCreat() {

}
proxyCreat.prototype.web = function (req,ares,opt) {
    if (opt.target == '') return false;

    urlObj = url.parse(opt.target);
    var options = {
        hostname:urlObj.hostname,
        port : urlObj.port
    }
    var request = http.request(options,function (res) {
        /*
        * 将请求端口的信息返还给ares
        * */
        res.pipe(ares)
    })
    request.end();
}
var proxy = new proxyCreat();
/*-----------------------------------*/
function proxyPass(config){
    return function (req,res,next) {
        var target = config[req.hostname] || '';
        console.log(target);
        /*
        * 分配端口
        * */
       /* proxy.web(req,res,{
            target:target
        })*/
        /*------------------------------
        * 手写proxy
        * */
        console.log(proxy);
        var status = proxy.web(req,res,{
            target:target
        })
        if (status == false){
            next();
        }

        /*------------------------------*/
}
}
app.use(proxyPass({
"www.testa.com" : "http://localhost:3000",
"www.testb.com" : "http://localhost:4000"
}));
app.get('/',function (req,res) {
    res.end('80')
})
app.listen(80);
//应用服务器A
var app3000 = express();
app3000.get('/',function (req,res) {
res.end('3000')
})
app3000.listen(3000);
//应用服务器B
var app4000 = express();
app4000.get('/',function (req,res) {
res.end('4000')
})
app4000.listen(4000)