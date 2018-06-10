/*
* nexttick
*
* */
console.log('a');
setTimeout(function () {
    console.log('b'+'-settimeout1');
},0);
setTimeout(function () { //排列于下个队列头部
    console.log('b'+'-settimeout2');
},0);
process.nextTick(function () { //排列于当前队列底部
    console.log('b'+'-nextTick1');
    process.nextTick(function () { //排列于当前队列底部
        console.log('b'+'-nextTick2');
    })
})
console.log('c');
console.log('d');