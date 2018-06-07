var p = require('./2-person');
var json = require('./json');
/*
*   require('.json)实现原理
*
* */
/*var json = require('./json');

var fs = require('fs');
var result = fs.readFileSync('./json.json');
var json = JSON.parse(result);*/
console.log(p);
console.log(json);
var fs = require('fs');
console.log('开始');
 var data1 = 'data1';
fs.readFile('./json.json', function (err, data) {
    data1 = data
})
var data2 = fs.readFileSync('./json.json');

console.log('结束+ ', data1.toString())
console.log('结束+ ', data2.toString())
setTimeout(function () {
    console.log('结束+ ', data1.toString())
},10)