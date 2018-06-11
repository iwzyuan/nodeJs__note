var http = require('http');
http.createServer(function (req, res) {
    console.log(req.headers.cookie);
    res.writeHead(200,{
        'Set-Cookie' : 'name=iwzy;path=/'
    })
    res.writeHead(200,{
        'Set-Cookie' : ['name=iwzy;path=/','age=3;path=/']
    })
    res.end('cookie');
}).listen(8080);