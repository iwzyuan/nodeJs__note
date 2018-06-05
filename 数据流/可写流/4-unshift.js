var http = require('http');
http.createServer(function (res,rep) {
    console.log(res.headers);
    rep.write('好的');
    rep.end();
}).listen(8080)