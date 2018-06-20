var fs = require('fs');
var express = require('express');
var http = require('http');
var app = express();
var http = http.createServer(function (req,res) {
    fs.stat('modify.js',function (err,stat) {
        console.log(stat.mtime);
        /*if (stat.mtime.getTime() == lastModified.getTime()){
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

        }*/
    })
})
http.listen(80)