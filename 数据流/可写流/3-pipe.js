var fs = require('fs');
var rs = fs.createReadStream('./read.txt');
var ws = fs.createWriteStream('./write.txt');
rs.pipe(ws);
/*
* 原理
* */
rs.on('data',function (data) {
    var flag = ws.write(data);
    if(!flag){
        rs.pause();//暂停
    }
});
rs.on('drain',function () {
    rs.resume(); //继续
})