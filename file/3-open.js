var fs = require('fs');
// var util = require('util');
// console.log(util.inspect(fs,true,4,true));
fs.readFileSync('line.txt');
/*
* open
*
* */
/*
* process.stdout.write();
process.stdin;
process.stderr;
*
* */
/*
* fs.open(,,callback) => callback返回fd为文件描述符
*
* */
fs.open('index.txt','r',function (err,fd) {
    console.log('open '+fd);
})

var fd = fs.openSync('line.txt','r');
console.log('openSync '+fd);//3
/*
    readSync  read
* fd ： 文件描述符
 * buffer ： 存放buffer的容器
  * offset ： 往buffer里写时候的偏移量
   * length ： 长度
    * position ： 文件的当前读取位置
* */
var buffer = new Buffer(3);
fs.readSync(fd,buffer,0,3,0)
console.log(buffer.toString());