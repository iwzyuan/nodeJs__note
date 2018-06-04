var EventEmitter = require('event/1-events');
var fs = require('fs');
var person = {};
var eve = new EventEmitter();
eve.on('name',outPut);
eve.on('age',outPut);
fs.readFile('name.txt',function (err,data) {
    person.name = data.toString();
    eve.emit('name');
});
fs.readFile('age.txt',function (err,data) {
    person.age = data.toString();
    eve.emit('age')
});
function outPut(  ) {
    if(person.name && person.age)
        console.log(person.name, person.age);
}