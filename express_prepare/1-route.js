var http = require('http');
var url = require('url');
var querystring = require('querystring');
var articles = {
    "1" : "第1篇文章的详情",
    "2" : "第2篇文章的详情",
    "3" : "第3篇文章的详情"
}
http.createServer(function (req,res) {
    //所有的程序都要使用的代码
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    var query = urlObj.query;

    if (pathname == '/'){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.end('<ul><li><a href="/article?id=1">第一篇</a></li><li><a href="/article?id=2">第二篇</a></li><li><a href="/article?id=3">第三篇</a></li></ul>')
    }else if (pathname == '/article'){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.end(articles[query.id]);
    }else {
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.end("404");
    }
}).listen(8080);