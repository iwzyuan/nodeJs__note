var fs = require('fs');
// console.log(fs);
/*
*   同步的方式读取
* */
var data = fs.readFileSync('index.txt','utf8');
console.log(data);
/*
* 异步读取文件
* */
fs.readFile('index.txt','utf8',function (err,data) {
    console.log(data);
})