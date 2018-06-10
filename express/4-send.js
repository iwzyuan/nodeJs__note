/*
* 接受客户端的参数数据
* 1. query查询字符串
* 2. 路径参数
* 3. 请求体里req.body
* 4. req.headers
* */

var express = require('express');
var app = express();
/*
*  访问：localhost:8080/query?name=zfpx
* */
app.get('/query',function (req,res) {
    res.send(req.query);
})
app.post('/params/:id/:name',function (req,res) {
    res.send(req.params);
})
app.all('/host',function (req,res) {
    console.log(req.host)
    console.log(req.path)
    res.send('host');
})
app.all('/status',function (req,res) {
    /*
    * 发送状态码
    *
    * */
    res.sendStatus('host');
})
// app.all('*',function (req,res) {
//     res.send('页面走丢了')
// })
app.listen(8080)