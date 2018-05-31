/*
* 事件
*   订阅发布
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
            // console.log(callback, index);
            // callback.apply(self,args)
            callback()
        })
        this._events.once[eventName] = [];
    }else {
        var callbacks = this._events[eventName];
        callbacks.forEach(function (callback, index) {
            // console.log(callback, index);
            // callback.apply(self,args)
            callback()
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
girl.on('hahaha', function () {
    console.log('shoudao');
})
girl.on('hahaha', function () {
    console.log('enheng');
})
// console.log(util.inspect(girl._events, true, 4, true));
girl.emit('hahaha');
girl.emit('drop');
girl.emit('drop');
girl.emit('drop');





