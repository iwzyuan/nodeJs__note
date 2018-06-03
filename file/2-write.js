var fs = require('fs');
/*
* 异步的方式把字符串写入文件
*   read r     write w      execute
*   读           写          可执行
*   二爷(写)一直（执行）死(4)读书
*   -rw- 创建者拥有的权限
*   r--  所属组拥有的权限
*   r--  其他人
* */
fs.writeFile('line.txt','第一行',{flaf:'w',encoding:'utf8'},function (err,data) {
    console.log(data);
})

fs.writeFile('line.txt',new Buffer('第二行'),{flaf:'w',encoding:'utf8'},function (err,data) {
    console.log(err);
})
/*
* flag : a
* */
fs.appendFile('line.txt',new Buffer('第三行'),{flaf:'a',encoding:'utf8'},function (err,data) {
    console.log('完成');
})

/*
* base64
*   base是把3个8位字节转成4个6位字节,然后在每个6位字节前面补两个0
* */
/*
* base64加密原理
* */
var buf = new Buffer('珠');
console.log(buf);
//e7 8f a0
console.log(parseInt('e7', 16));// 231
console.log(parseInt('8f', 16));// 143
console.log(parseInt('a0', 16));// 160

console.log((231).toString(2));
console.log((143).toString(2));
console.log((160).toString(2));
//00111001 00111000 00111110 00100000

console.log(parseInt('00111001', 2));//57
console.log(parseInt('00111000', 2));//56
console.log(parseInt('00111110', 2));//62
console.log(parseInt('00100000', 2));//32

var baseRound = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
baseRound+= baseRound.toLowerCase();
baseRound+= '1234567890';
baseRound+= '+/';
console.log(baseRound[1]);
console.log(baseRound[57] + baseRound[56] + baseRound[62] + baseRound[32]);
