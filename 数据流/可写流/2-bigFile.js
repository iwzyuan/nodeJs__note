var fs = require('fs');
var rs = fs.createReadStream('./read.txt',{
    highWaterMark:13
})//64kb 默认值
var ws = fs.createWriteStream('./write.txt',{
    highWaterMark:11
})//16kb
rs.on('data',function (data) {
    var flag = ws.write(data);//写入数据如果在缓存区内返回true如果数据存至内存返回false
    console.log(flag);
})
ws.on('drain',function () { //当缓存区溢出时触发drain
    console.log('drain');
})