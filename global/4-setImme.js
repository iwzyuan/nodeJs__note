var fs = require('fs');
/*
* 优先级: nextTick > setTimeout > setImmediate > 异步I/O
* */
fs.readFile('1.txt',function (err,data) {  //I/O异步
    console.log(data.toString());
    console.log('-----------------------------------');
})
process.nextTick(function () {
    console.log('a');
    process.nextTick(function () {
        console.log('b');
    })
})
setTimeout(function () {
    console.log('setTimeout');
},0)
setImmediate(function () {
    console.log('setImmediate');
})




