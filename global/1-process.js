/*
* 监听错误进程，若有错误立即终止并打印错误信息
* */
process.on('uncaughtException',function (e) {
    //console.log(e.message); //捕获异常
});
//console.log(b);//错误信息
try {
    //console.log(a)
}catch (e) {
    //console.log(e.message);
}
/*
* 标准输入
* */
process.stdout.write('hello');
// console.log(process.pid);
/*
* 标准输出
* */
process.stdin.on('data',function (data) {
    console.log(data.toString());
});
process.argv.forEach(function (val,index,array) {
    console.log(val, index, array);
});
process.on('exit',function () {
    console.log('exit current serve');
});

console.log('cwd-'+process.cwd());//cwd current working directory 当前工作目录
console.log('__dirname-'+__dirname);
process.chdir('..'); //change directory
process.chdir('global'); //change directory
console.log('cwd-'+process.cwd());//cwd current working directory 当前工作目录
console.log('__dirname-'+__dirname);



// process.kill() //终止进程


