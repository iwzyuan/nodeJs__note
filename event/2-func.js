var EveFn = require('events');
var eve = new EveFn();
function say(name,word) {
    console.log(name, ":", word);
}
/*
* 第一中newSay改写
* */
var newSay1 = say.bind(null,'iwzyuan');
/*
* 第二种newSay改写
* */
function newSay2(){
    say.apply(null,['张三'].concat(Array.prototype.slice.call(arguments)))
}
newSay1('哈哈哈');
newSay2('哈哈');

eve.on('in',function (counter,times,callback) {
    if(counter >= times)
        callback();
})
var counter = 0;
function eat(times,callback) {
    ++counter;
    eve.emit('in',counter,times,callback);
}
eat(2,function () {
    console.log('吃完了');
})
eat(2,function () {
    console.log('吃完了');
})