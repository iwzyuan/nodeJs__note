var fs = require('fs');
fs.open('line.txt','w',function (err,fd) {
    fs.write(fd,new Buffer('哈哈哈'),3,6,0,function (err,bytesWriter) {
        console.log(bytesWriter);
    })
})