//exports = module.exports;
var Person = function (name,age) {
    this._name = name;
    this._age = age;
}
Person.prototype.getName = function () {
    return this._name
}
Person.prototype.setName = function (name) {
    this._name = name;
}
Person.prototype.getAge = function () {
    return this._age
}
Person.prototype.setAge = function (age) {
    this._age = age;
}
Person.prototype.home = '西安';
//exports = {name:1} || exports = Person //此处exports赋值为引用类型时，module.exports值不变的
// console.log(exports);
// console.log(module.exports);
// console.log(module.exports == exports);
module.exports = Person;