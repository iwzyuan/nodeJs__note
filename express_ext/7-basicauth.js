var fs = require('fs');
var express = require('express');
var http = require('http');
var app = express();
/*
* 请求头：authorization  ->  var parts = new Buffer(area,'base64').toString().split(':'); -> 转化为[账号，密码]
* 响应头：WWW-Authenticate -> 表示发起填写验证的框
* */
function send(filename,req,res){

}
var http = http.createServer(function (req,res) {
    var auth = req.headers['authorization'];
    if (auth){
        var area = auth.slice(6);
        var parts = new Buffer(area,'base64').toString().split(':');
        console.log(parts);
        if (parts[0] == parts[1]){
            res.end('welcome');
        }else {
            res.setHeader('WWW-Authenticate','Basic realm="Secure Area"')
            res.writeHead(401);
            res.end();
        }
    } else {
        res.setHeader('WWW-Authenticate','Basic realm="Secure Area"')
        res.writeHead(401);
        res.end();
    }
    if (req.url != '/favicon.ico'){
        res.end('')
    } else {
        res.end('404')
    }
})
http.listen(80)