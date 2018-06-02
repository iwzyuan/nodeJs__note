exports.loaded = function (who) {
    console.log(who,module.loaded);
}
console.log('b开始加载');
var a = require('./a')
exports.name = 'iwzyuan'
a.loaded('b.js调用a.js')