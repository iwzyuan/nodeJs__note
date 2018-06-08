var http = require('http');
var proto = {};
function creatServer() {
    function app(req,res,next) {

    }
    /*
    * 属性copy,把proto中的属性copy到app中
    * */
    Object.assign(app,proto);
    app.stack = [];
    return app;
}
proto.use = function (handle){
    this.stack.push(handle);
}


module.exports = creatServer;