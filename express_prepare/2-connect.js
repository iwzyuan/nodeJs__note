var http = require('http');
var url = require('url');
var proto = {};
function createServer() {
    function app(req,res) {
        app.handle(req,res);
    }
    /*
    * 属性copy,把proto中的属性copy到app中
    * */
    Object.assign(app,proto);
    app.stack = [];
    return app;
}
proto.use = function (routePath,fn){
    var handle = fn;
    var path = routePath;
    if (typeof path != 'string'){
        handle = routePath;
        path = '/'
    }
    this.stack.push({
        handle : handle,
        path : path
    });
}
proto.handle = function(req,res){
    var stack = this.stack;
    var index = 0;
    function next(err) {
        var layer = stack[index++];
        var route = layer.path;
        var handle = layer.handle;
        var path = url.parse(req.url).pathname;
        if (path.startsWith(route)) {
            handle(req,res,next);
        }else {
            next();
        }
    }
    next();
}
proto.listen = function (port){
    http.createServer(this).listen(8080);
}

module.exports = createServer;