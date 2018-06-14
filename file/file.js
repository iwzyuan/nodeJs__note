var fs = require('fs');
var util = require('util')
// console.log(fs);
/*
*   同步的方式读取
* */
var data = fs.readFileSync('index.txt','utf8');
console.log(data);
/*
* 异步读取文件
* */
fs.readFile('index.txt','utf8',function (err,data) {
    console.log(data);
})
fs.readdir(process.cwd(), function (err, files) {
    if (err) {
        console.log(err);
        return;
    }
    //console.log(files);
});
/*
* 判断是目录还是文件夹
* */
fs.readdir(process.cwd(), function (err, files) {
    if (err) throw err;
    files.forEach( function (file) {
        fs.stat('./' + file, function (err, stats) {
            if (err) throw err;
            if (stats.isFile()) {
                //console.log("%s is file", file);
            }
            else if (stats.isDirectory ()) {
                //console.log("%s is a directory", file);
            }
            //console.log('stats:  %s',JSON.stringify(stats));
        });
    });
});
/*
* 当文件发生改变调取监听函数
*
* */
fs.watchFile('./testFile.txt', function (curr, prev) {
    /*
    * curr修改后的文件信息， prev修改前
    * */
    console.log('the current mtime is: ' + curr.mtime);
    console.log('the previous mtime was: ' + prev.mtime);
});

fs.writeFile('./testFile.txt', "changed", function (err) {
    if (err) throw err;

    console.log("file write complete");
});