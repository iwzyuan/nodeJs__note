var fs = require('fs');
var express = require('express');
var http = require('http');
var app = express();
/*
* 缓存时间 expires  cache-Control
* */
function send(filename,req,res){
    fs.readFile(filename,function (err,data) {
        var expires = new Date(Date.now() + 10*1000)
        // res.setHeader('Expires',expires.toUTCString());
        res.setHeader('Cache-Control','max-age=10');
        res.end(data);
    })
}
var http = http.createServer(function (req,res) {
    console.log(req.url);
    if (req.url != '/favicon.ico'){
        var filename = req.url.slice(1);
        send(filename,req,res)
    } else {
        res.end('404')
    }
})
http.listen(80)