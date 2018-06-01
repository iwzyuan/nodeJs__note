var Person = require('./human');

var p1 = new Person('iwzyuan',23);
console.log(p1.getName());
var p2 = new Person('lidan',23232)
console.log(p2.getName());
p2.setName('hahaha')
console.log(p2.getName());

console.log(p1.home,p2.home);
console.log(p1.hasOwnProperty('home'));
p1.home = '上海'
console.log(p1.hasOwnProperty('home'));
console.log(p1.home,p2.home);