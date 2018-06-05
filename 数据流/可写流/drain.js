var fs = require('fs');
var ws = fs.createWriteStream('./write.txt',{
    highWaterMark:'1'
});
writeStr(ws,'吴仲圆','utf8',function () {});
function writeStr(writer,data,encoding,callback) {
    var i = 1000000000;
    write();
    function write() {
        var ok = true;
        do {
            i -= 1;
            if(i == 0){
                writer.write(data,encoding,callback)
                console.log('添加完毕')
            }else {
                ok = writer.write(data,encoding)
                console.log(ok);
            }
        }while (i>0 && ok == true);
        if(i>0){
            writer.once('drain',function () {
                write();
            })
        }
    }
}