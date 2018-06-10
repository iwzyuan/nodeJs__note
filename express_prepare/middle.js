var url = require('url');
var fs = require('fs')
module.exports = function(app){
    app.use(function (req,res,next) {
        res.render = function render(path,obj) {
            var str = fs.readFileSync(path,'utf8')
            var tpl = str.replace(/<%=([\s\S]+?)%>/g,function (match,group) {
                return obj[group]
            })
            res.send(tpl)
        }
        next();
    })
    app.use(function (req,res,next) {
        var urlObj = url.parse(req.url,true);
        var pathname = urlObj.pathname;
        var query = urlObj.query;
        req.path = pathname;
        req.query = query;
        next(); //调用next表示可以继续调用
    })
    app.use(function (req,res,next) {
        res.send = function (html) {
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
            res.end(html);
        }
        next();
    })

}
