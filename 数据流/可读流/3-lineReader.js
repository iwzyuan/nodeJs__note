
var fs = require('fs');
var rs = fs.createReadStream('./read.txt',{
    start:0,end:5,highWaterMark:3
})
rs.on('readable',function () {
    console.log('-----------readable----------');
    var buff;
    while (null != (buff = rs.read(1))){
        console.log(buff[0]);//判断是否为换行符
    }
})

rs.on('end',function () {

})