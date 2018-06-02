/*
* 3种构建beffer的方法
* */
var buf1 = new Buffer(3);//size
buf1[0] = 0x61;
buf1[1] = 0x62;
buf1[2] = 0x63;
var buf2 = new Buffer([0x61,0x62,0x63]);//ary
var buf3 = new Buffer('abc','utf8');//string
console.log(buf1);
console.log(buf2);
console.log(buf3);

var buf = new Buffer(12);
buf.write('吴仲',0,6);//参数：string，位置，大小
buf.write('吴仲',6,6);
console.log(buf);
/*
* 当截取不完全时，自动补全内置模块
* */
var buf3 = new Buffer('吴仲元啊');
var buf3_1 = buf3.slice(0,7)
var buf3_2 = buf3.slice(7)
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder();
console.log(decoder.write(buf3_1));
console.log(decoder.write(buf3_2));
/*
* 合并Buffer
*
*
* */
var srcBuf = new Buffer([4,5,6]);
var tarBuf = new Buffer(6);
tarBuf[0] = 1;
tarBuf[1] = 2;
tarBuf[2] = 3;
srcBuf.copy(tarBuf,3,0,3);
console.log(tarBuf);//<Buffer 01 02 03 04 05 06>