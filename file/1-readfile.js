var fs = require('fs');
var util = require('util');
/*
*   path 路径
*   options
*       | encoding(编码格式)  flag
* */
var data = fs.readFileSync('index.txt',{encoding:'utf8',flag:'r'});
fs.readFile('index1.txt',{encoding:'utf8',flag:'w'},function (err,data) {
    if(err){
        console.log(util.inspect(err,true,4,true));
    }
})