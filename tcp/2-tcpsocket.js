var net = require('net');
var util = require('util');
/*
* allowHalfOpen:当客户端要断开，是否同意
* */

//net.Socket  双工流 Duplux
var server = net.createServer({allowHalfOpen:false},function (socket) {
    console.log(util.inspect(socket.address()));
    socket.on('data',function (data) {
        console.log(data);
        console.log('已经接收到%d个字节',socket.bytesRead)
        socket.write('服务器收到'+data);
    })
    socket.on('close',function (err) {
        //非正常断开链接
        console.log('close',err)
    })
    socket.end('end',function (err) {
        //正常断开
        console.log('end',err)
    })
});
server.on('error',function (err) {
    console.log(err);
})
server.listen(8080,'localhost',511,function () {
    console.log(util.inspect(server.address()));
})