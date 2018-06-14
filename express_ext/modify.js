var fs = require('fs');
var express = require('express');
var http = require('http');
var app = express();
/*
* 1.
* */
function send(filename,req,res){
    //取得最后修改事件
    var lastModified = new Date(req.headers['if-modified-since']);//缓存区最后修改事件
    fs.stat(filename,function (err,stat) {
        console.log(stat.mtime, lastModified);
        if (stat.mtime.getTime() == lastModified.getTime()){
            res.statusCode = 304
            res.end();
        } else {
            res.writeHead(200,{'last-Modified':stat.mtime.toGMTString()})
            var a = fs.createReadStream(filename);
            a.on('data',function (data) {
                res.write(data);
                res.end()
            })

            // req.sendFile(filename)

        }
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