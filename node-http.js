var http = require('http');
/*
*
* 每当请求来的时候调用serve函数对客户端请求进行处理
*       request：请求  response:响应
* */
function serve(request,response) {
    console.log(request.method);//请求的方法
    console.log(request.url);//请求里的url地址
    console.log(request.headers);//获取请求头信息

    response.statusCode = 404;//设置状态码
    response.setHeader('Content-Type','text/html;charset=utf-8')
    response.setHeader('name','iwzyuan');//设置响应头
    response.write(new Date().toString());//写入响应体
    response.end();//结束响应
}
var server = http.createServer(serve);//创建服务器

server.listen(8080,'localhost');//