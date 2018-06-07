var net = require('net');
var util = require('util');
/*
* allowHalfOpen:当客户端要断开，是否同意
* */

//net.Socket  双工流 Duplux
var server = net.createServer({allowHalfOpen:false},function (socket) {
    console.log(util.inspect(socket.address()));
    //查看当前连接数量
    console.log(util.inspect(socket));
    // socket.getConnections(function (err,count) {
    //     console.log(count);
    // })
    socket.on('error',function (err) {
        console.log(err);
        socket.destroy();
    })
    socket.on('close',function (err) {
        console.log(err);
        socket.destroy();
    })
});
server.on('error',function (err) {
    console.log(err);
})
server.listen(8080,'localhost',511,function () {
    console.log(util.inspect(server.address()));
})
server.on('close',function (err) {
    console.log('服务器端正常关闭');
})