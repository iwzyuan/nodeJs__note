var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path')
module.exports = function (session) {
    var Store = session.Store;
    // var data = {};
    function FileStore(opt) {
        var options = opt || {};
        this._maxAge = options.maxAge || 0;
        this._dir = options.dir || '.';
        mkdirp.sync(this._dir)
    }
    FileStore.prototype.__proto__ = Store.prototype;
    FileStore.prototype.get = function (sid,callback) {
            fs.readFile(path.join(this._dir,sid),'utf8',function (err,data) {
                callback(null,JSON.parse(data))
            })
    }
    FileStore.prototype.set = function (sid,session,callback) {
        fs.writeFile(path.join(this._dir,sid),JSON.stringify(session),callback);
        /*data[sid] = session;
        console.log('set'+session);
        callback();*/
    }
    FileStore.prototype.destory = function (sid,callback) {
        delete data[sid];
        callback();
    }
    return FileStore
}