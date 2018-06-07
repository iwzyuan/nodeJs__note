/*
* 1. 创建一个服务器
* 2. 客户端可以连接服务器
* 3. 客户端可以发言，然后广播大家
* 4. 客户端连接和退出后都要通知大家
* 5. 显示当前在线人数
* */

var net = require('net');
var util = require('util');
var clients = {};
var server = net.createServer(function (socket) {
    var nickname;
    socket.setEncoding('utf8')
    server.getConnections(function (err,count) {
        console.log('到现在'+count+'人')
    })
    socket.write('欢迎光临，请输入用户名');
    socket.on('data',function (data) {
        data = data.replace(/\r\n/,'');
        if(nickname){
            broadcast(nickname,nickname+":"+data+'\r\n')
        }else {
            nickname = data;
            clients[nickname] = socket;
            broadcast(nickname,nickname+'加入了聊天室\r\n');
        }
    })
    socket.on('end',function () {
        broadcast(nickname,nickname+'离开了聊天室\r\n');
        clients[nickname].destroy()
        delete clients[nickname];
    })
    socket.on('close',function () {
        
    })
})
function broadcast (name,msg){
    for (var name in clients){
        if (nickname != name){
            clients[name].write(msg);
        }
    }
}
server.listen(8080)