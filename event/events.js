/*
* 事件
*   订阅发布
*
* */
function Person(name) {
    this.name = name;
    this._events = {}
}
Person.prototype.on = function (eventName,callback) {
    if(this._events[eventName]){  //添加过了
        this._events[eventName].push(callback);
    }else {
        this._events[eventName] = [callback];
    }
}
Person.prototype.emit = function (eventName) {
    var args = Array.prototype.slice.call(arguments,1);
    var callbacks = this._events[eventName];
    var self = this;

    callbacks.forEach(function (callback,index) {
        console.log(callback,index);
        // callback.apply(self,args)
        callback()
    })
}
var girl = new Person();
girl.on('hahaha',function () {
    console.log('shoudao');
})
girl.on('hahaha',function () {
    console.log('enheng');
})
girl.emit('hahaha');





