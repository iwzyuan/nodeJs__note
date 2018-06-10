/*
* 事件
*   订阅发布 node中events模块实现原理
*
* */
var util = require('util');
function Person(name) {
    this.name = name;
    this._events = {}
}

Person.prototype.on = function (eventName, callback) {
    if (this._events[eventName]) {  //添加过了
        this._events[eventName].push(callback);
    } else {
        this._events[eventName] = [callback];
    }
}
Person.prototype.emit = function (eventName) {

    var args = Array.prototype.slice.call(arguments, 1);

    var self = this;

    if(this._events.once[eventName]){
        var callbacks = this._events.once[eventName];
        callbacks.forEach(function (callback, index) {
            callback.apply(self,args)
        })
        this._events.once[eventName] = [];
    }else {
        var callbacks = this._events[eventName];
        callbacks.forEach(function (callback, index) {
            /*
            * args为调用emit方法时的参数转换为了数组
            *
            * */
            callback.apply(self,args)
        })
    }


}
Person.prototype.once = function (eventName, callback) {
    if(!this._events['once']){
        this._events['once'] = {}
    }
    if (this._events['once'][eventName]) {  //添加过了
        this._events['once'][eventName].push(callback);
    } else {
        this._events['once'][eventName] = [callback];
    }
}
var girl = new Person();
girl.once('drop', function () {
    console.log('once');
})
girl.on('hahaha', function (arg) {
    console.log(arg,'shoudao');
})
girl.on('hahaha', function () {
    console.log('enheng');
})
// console.log(util.inspect(girl._events, true, 4, true));
girl.emit('hahaha','luhahaha');
girl.emit('drop');
girl.emit('drop');





