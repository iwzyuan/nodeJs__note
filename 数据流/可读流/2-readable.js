/*
* 非flowing模式
* */
var fs = require('fs');
var rs = fs.createReadStream('./read.txt',{
    highWaterMark:3
})
var buffers = [];
/*
* 若监听其readable，则转换为非flowing模式，先存默认64kb到缓存区，若缓存区存满则不再储存
* 要等到rs.read(<num>)消费之后才会继续往缓存区内添加
*
* */
rs.on('readable',function () {
    console.log('-----------readable----------');
    var buff;
    while (null != (buff = rs.read(1))){
        console.log(buff);
        buffers.push(buff);
    }
})

rs.on('end',function () {
    var data = Buffer.concat(buffers)
    console.log(data.toString());
})