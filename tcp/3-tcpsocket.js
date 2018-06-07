var net = require('net');
var util = require('util');
var fs = require('fs')
/*
* allowHalfOpen:当客户端要断开，是否同意
* */

//net.Socket  双工流 Duplux
var ws = fs.createWriteStream('./socket.txt')
var server = net.createServer({allowHalfOpen:false},function (socket) {
    /*
    * 设置超时时间
    * */
    // socket.setTimeout(10*100);
    // socket.on('timeout',function () {
    //     socket.resume();
    //     socket.pipe(ws);
    // })
    console.log(util.inspect(socket.address()));
    // socket.setEncoding('utf8');
    socket.on('data',function (data) {
        console.log(data);
        console.log('已经接收到%d个字节',socket.bytesRead)
        //客户端停止写入时也不关闭目标文件
        socket.pipe(ws,{end:false});
        socket.on('end',function () {
            ws.end('再见');
            socket.pipe(ws,{end:false});
        })
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