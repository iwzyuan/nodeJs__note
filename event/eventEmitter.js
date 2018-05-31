/*
* events模块
*
* */
var EventEmitter = require('events');
var util = require('util');
function Bell(name) {
    this.name = name;
}

util.inherits(Bell,EventEmitter);
var jingGoBell = new Bell('jingGo');

jingGoBell.on('ring',function () { //添加事件
    console.log('收到');
});
var fn = function (who) {
    console.log(who + '收到2');
}
jingGoBell.addListener('ring',fn); //添加事件

jingGoBell.once('drop',function () { //添加一次事件
    console.log('铃铛丢了');
});
jingGoBell.once('drop',function () { //添加一次事件
    console.log('铃铛丢了');
});
//jingGoBell.removeListener('ring',fn); //移除事件

console.log(jingGoBell.listeners('ring')); //监听事件

jingGoBell.emit('ring','iwzyuan');
jingGoBell.emit('drop');