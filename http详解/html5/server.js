// var mime = require('mime');
var http = require('http');
var querystring = require('querystring')
var util = require('util');
var url = require('url');
var fs = require('fs');
var multiparty=  require('multiparty');//解析formdata
var querystring = require('querystring');
http.createServer(function (req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        (fs.createReadStream('./index.html')).pipe(res);
    }else if(pathname == '/post') {
        var form = new multiparty.Form();
        form.parse(req, function (err, fields, files) {
            console.log('fields,files=> ',fields,files);
            var tempPath = files.fileUpload[0].path;
            console.log('tempPath=>',tempPath);
            var filename = fields.fileName[0]
            var rs = fs.createReadStream(tempPath);
            var ws = fs.createWriteStream('./'+filename);
            rs.pipe(ws);
            /*
            * 删除临时文件 => fs.unlink
            * */
            fs.unlink(tempPath, function (err) {
                if(!err) {
                    console.log('临时文件删除成功');
                }else {
                    console.log(err);
                }
            })
            res.end();
        })
    }
}).listen(8089,function () {
    console.log('server started');
})