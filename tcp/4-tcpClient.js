var net = require('net');
var util = require('util');
/*
* TCP/IP创建一个客户端
*
* */
var socket = new net.Socket({allowHalfOpen:true});
socket.setEncoding('utf8');
socket.connect(8080,'localhost',function () {
    socket.write('hello')
    socket.on('data',function (data) {
        console.log(data);
    })
})