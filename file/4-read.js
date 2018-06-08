var fs = require('fs');

// var buffer = new Buffer(12);
var list = [];
fs.open('line.txt','r',function (err,fd) {
    var pos = 0;
    function read() {
        var buffer = new Buffer(3);
        fs.read(fd,buffer,0,3,pos,function (err,bytesLen) {
            pos += bytesLen;
            if (bytesLen >0 ){
                list.push(buffer.slice(0,bytesLen));
                read();
            } else {
                var result = Buffer.concat(list);
                console.log(result);
            }
        })
    }
    read();
/** fd ： 文件描述符
 * buffer ： 存放buffer的容器
  * offset ： 往buffer里写时候的偏移量
   * length ： 长度
    * position ： 文件的当前读取位置
* */
    // fs.read(fd,buffer,0,6,0,function (err,btyesRead) {
    //     console.log('btyesRead '+btyesRead);
    //     console.log('buffer '+buffer);
    //     fs.read(fd,buffer,6,6,6,function (err,btyesRead) {
    //         console.log('btyesRead '+btyesRead);
    //         console.log('buffer '+buffer);
    //         console.log(buffer.toString());
    //     })
    // })
})