/*
* flowing模式
* */
var fs = require('fs');
var rs = fs.createReadStream('./read.txt',{//start end 闭区间
    start:0,end:5,highWaterMark:3
})
rs.setEncoding('utf8')
// console.log(rs);
rs.on('open',function () {
    console.log('打开文件');
})
rs.on('data',function (data) {
    console.log(data);
    rs.pause(); //暂停读取
    setTimeout(function () {
        rs.resume();//开始读取
    },2000)
})
rs.on('end',function () {
    console.log('读取完成');
})



