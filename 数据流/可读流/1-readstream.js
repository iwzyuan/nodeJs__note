/*
* flowing模式
* */
var fs = require('fs');
var rs = fs.createReadStream('./read.txt',{//start end 闭区间
    highWaterMark:100
})
rs.setEncoding('utf8')
// console.log(rs);
rs.on('open',function () {
    console.log('打开文件');
})
/*
* 监听rs的data事件后：
*   data一直往缓存区输入一直源源不断的读取，默认一次读取64kb，可在定义时用highWaterMark改变一次读取量
*       其中rs.pause()代表暂停
*       rs.resume()代表继续
*
* */
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



