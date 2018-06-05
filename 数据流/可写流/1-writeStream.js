var fs = require('fs');
var rs = fs.createReadStream('./read.txt')
var ws = fs.createWriteStream('./write.txt',{
    autoClose:false
})

ws.on('open',function () {
    console.log('写入文件已经打开')
})
rs.on('data',function (data) {
    ws.write(data);//ws.write(chunk<写入的数据>,encoding,callback)
})
rs.on('end',function () {
    ws.end('写入完成',function () {//字符串写入文件，callback
        console.log('写入完成');
        console.log('共写入%d字节',ws.bytesWritten);//%d占位符
    });
})
rs.on('close',function () {
    console.log('关闭');
})