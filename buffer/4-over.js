var buf = new Buffer(2);
buf[0] = -10;
buf[1] = 256;
/*
* 如果大于255，会对256取模，如果小于0，先摸256再加上256
* */
console.log(buf);
/*
* buffer方法
* */
buf.isEncoding('utf8');//检测是不是urf8编码
Buffer.isBuffer(Date);//检测是不是buffer类型
Buffer.byteLength('Hello', 'utf8');//返回字符串实际字节长度
var buf = new Buffer(5);
buf.write('He');
buf.write('l', 2);
buf.write('lo', 3);//第一个参数为想写入的字符串，第二个参数为从buffer第几个字符开始写
console.log(buf.toString());
buf.slice(1, 3);//包前不包后
buf.toString();//将buf转换成默认utf8的字符串
buf.toString('utf8',1,3);返回指定位置为字符串