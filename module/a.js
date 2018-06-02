exports.loaded = function (who) {
    console.log(who,module.loaded);
}
require('./module_loaded1')
console.log('a开始加载');
var b = require('./b')
b.loaded('a.js调用b.js');
console.log('module.parent',module.parent);
console.log(module.children);