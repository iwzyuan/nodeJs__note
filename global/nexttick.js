/*
* nexttick
*
* */
console.log('a');
setTimeout(function () {
    console.log('b'+'-settimeout1');
},0);
setTimeout(function () {
    console.log('b'+'-settimeout2');
},0);
process.nextTick(function () { //下个事件队列
    console.log('b'+'-nextTick1');
    process.nextTick(function () { //下个事件队列
        console.log('b'+'-nextTick2');
    })
})
console.log('c');
console.log('d');