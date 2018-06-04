var person1 = require('./2-person');
console.log(require);
//var person1 = require('./person');//多次执行person.js只跑一次，因为读取一次就被缓存起来了
person1.getName('iwzy')