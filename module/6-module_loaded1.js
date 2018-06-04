/*
* require
*   resolve  cache
* */
var a = require('./a');
var b = require('./b');
a.loaded('module_a调用');
b.loaded('module_b调用');
console.log(require);
console.log('module.parent',module.parent);
// console.log(module.children);