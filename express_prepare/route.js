var url = require('url');
var fs = require('fs');
var articles = {
    "1" : "第1篇文章的详情",
    "2" : "第2篇文章的详情",
    "3" : "第3篇文章的详情"
}
module.exports = function(app){
    app.use('/list',function (req,res) {
        fs.createReadStream('./index.html').pipe(res);
        // res.send('<ul><li><a href="/article?id=1">第一篇</a></li><li><a href="/article?id=2">第二篇</a></li><li><a href="/article?id=3">第三篇</a></li></ul>')
    })
    app.use('/article',function (req,res) {
            // var data = data.replace('<%=content>',articles[req.query.id])
           res.render('./detail.html',{
               content:articles[req.query.id]
           })

        // res.send(articles[req.query.id]);
    })
    app.use(function (req,res) {
        res.send('404');
    })
}
