/*
* 多语言网站
* */
var express = require('express');
var path = require('path');
var app = express();
app.listen(80);
function checkLanguage(languages){
    function parse(str) {
        if (!str)
                return [];
        return str.toLowerCase().split(',').map(function (lang) {
            var parts = lang.split(';');
            return {name:parts[0],q:parts[1]||1}
        }).filter(function (lang) {//过滤掉服务器端不能提供的语言
            return languages.indexOf(lang.name) != -1
        }).sort(function (pre,after) {//按q从高到低排序
            return after.q - pre.q
        }).map(function (item) {//把数组的每个元素转成字符串
            return item.name
        });
    }
    //Accept-Language: zh-CN,zh;q=0.9
    return function (req,res,next) {
        var acceptLanguages = req.headers['accept-language'];
        req.acceptLanguage = parse(acceptLanguages)[0] || languages[0];
        console.log(req.acceptLanguage);
        next();
    }
}
app.use(checkLanguage(['en','zh']));
app.get('/',function (req,res) {
    res.setHeader('Content-Language',req.acceptLanguage);
    res.sendFile(path.join(__dirname,req.acceptLanguage,'index.html'))
})