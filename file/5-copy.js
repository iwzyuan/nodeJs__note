var fs = require('fs');
var read = function (fd,list,pos,src,target) {
    var buffer = new Buffer(3);
    fs.read(fd, buffer, 0, 3, pos, function (err, bytesLen) {
        pos += bytesLen;
        if (bytesLen > 0) {
            list.push(buffer.slice(0, bytesLen));
            arguments.callee
            // read(fd,list,pos,src,target);
        } else {
            var result = Buffer.concat(list).toString();
            fs.writeFile(target,result,function (err,data) {
                if(!err) {
                    console.log('copy完成');
                }else {
                    console.log('copy失败: ' + err);
                }
            })
        }
    })
}
//同步的方式把src 复制到target
function copy(src, target) {
    var fd = fs.openSync(src, 'r');
    var pos = 0;
    var list = [];
    read(fd,list,pos,src,target);
}


copy('line.txt', '2.txt');