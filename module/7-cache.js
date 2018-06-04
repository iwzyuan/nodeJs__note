//var person = require('./person');
// var home = require('home')
var util = require('util');
var home = require('home1')
console.log(util.inspect(require,true,4,true));
console.log(home);
// console.log(require);
/*
* require.resolve('./person') => 返回模块的绝对路径
*
* */
/*
* 清除缓存的方法
* */
// console.log(require.resolve('./person'));
// delete require.cache[require.resolve('./person')]; //=> 清除缓存
/*
*  require查找机制（不写文件路径只写文件名的情况下）
*   1. 直接在当前node_modules目录下查找(扩展名)
*   3. 在当前node_modules目录下当成一个文件夹查找=> package.json文件夹中查找main字段(扩展名)
*   4. node_modules包文件中查找包文件夹中的index(js/.node)
*
*
* */
