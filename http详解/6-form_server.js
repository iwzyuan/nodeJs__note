var http = require('http');
var querystring = require('querystring')
var util = require('util');
var url = require('url');
var fs = require('fs');
http.createServer(function (req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        // console.log(pathname);
        // var indexHtml = fs.readFileSync('./index.html')
        // res.write(indexHtml)
        // console.log(res);
        (fs.createReadStream('./index.html')).pipe(res).log;
    }else if(pathname == '/post') {
        var contentType = req.headers['content-type'];
        req.setEncoding('utf8');
        var result = '';
        req.on('data',function (data) {
            result += data;
        })
        req.on('end',function (data) {
            if(contentType == 'application/json')
                var obj = JSON.parse(result);
            else if (contentType == 'application/x-www-form-urlencoded'){
                var obj = querystring.parse(result)
            }
            var endData = util.inspect(obj);
            console.log(endData);
            res.end(endData);
        })
    }

}).listen(8089,function () {
    console.log('server started');
})