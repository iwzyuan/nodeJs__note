var buf1 = new Buffer([1,2,3,4,5,6,6,6,6,6,6]);
var buf2 = new Buffer([4,5,6]);
var buf = Buffer.concat([buf2,buf1],6);//合并buff，(ary,合并后buff长度).长度可省略
console.log(buf);
/*
* 手写concat方法
* */
function concat(list,length) {
    var totalLen = 0;
    list.forEach(function (val,index) {
        totalLen += val.length;
    });
    var finalLen = length ? length : totalLen;
    var newBuff = new Buffer(finalLen);
    var count = 0;
    list.forEach(function (val,index) {
        val.forEach(function (val,index) {
            newBuff[count] = val;
            count++;
        })
    });
    return newBuff;
}
var buf3 = new Buffer([1,2,3]);
var buf4 = new Buffer([4,5,6]);
var buf_me = concat([buf3,buf4],12);
console.log(buf_me);