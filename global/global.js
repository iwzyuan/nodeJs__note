/*
* global == window 全局对象
* module : 当前模块对象
* exports : 导出对象
* require : 加载模块的方法
* __dirname : 当前模块所在的目录的绝对路径
* __filename : 当前模块的绝对路径
* */
//console.log(global);
function f(module,exports,require,__dirname,filename) {

}
//console.trace(); //显示当前的调用当前栈
/*
* pid(processid) : 进程ID
* process : 当前进程对象
*   setImmediate  clearImmediate
*
* */

/*
* 1. 当前模块内部声明的变量
* 2. 外部导入的模块
* 3. 全局对象
* 4. 类全局变量，从外界传入的参数
* */
console.log(process.pid);

