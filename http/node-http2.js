var http = require('http');
var fs = require('fs');
var mime = require('mime'); // 引入文件类型模块
/*
*
* 每当请求来的时候调用serve函数对客户端请求进行处理
*       request：请求  response:响应
* */

function serve(request, response) {
    var url = request.url;
    if (url == '/') {
        response.statusCode = 200;//设置状态码
        response.setHeader('Content-Type', 'text/html;charset=utf-8');
        response.setHeader('name', 'iwzyuan');//设置响应头
        fs.readFile('index.html', function (err, data) {  //读取文件得内容，并且将读取到得内容写入到相应提
            response.write(data);
            response.end();
        })
    } else {
        astatic(url, response);
    }
}

function astatic(url, response) {  // 文件类型不为html的回掉函数
    var arr = url.match(/\/.+/g);
    var curUrl = arr[arr.length-1].slice(1);
    var curType = curUrl.split('.')[1];
    response.statusCode = 200;//设置状态码
    response.setHeader('Content-Type', mime._types[curType] + ';charset=utf-8');
    response.setHeader('name','iwzyuan');
    fs.readFile(curUrl, function (err, data) {  //读取文件得内容，并且将读取到得内容写入到相应提
        response.write(data);
        response.end();
    })
}

var server = http.createServer(serve);//创建服务器

server.listen(80, 'localhost');