/*
* util
*
* */
var util = require('global/5-util');

function Parent() {
    this.name = 'father';
    this.age = 45;
    this.say = function () {
        console.log('hello', this.name);
    }
}

Parent.prototype.showName = function () {
    console.log(this.name);
}

function Child() {
    this.name = 'child';
}

/*
* 实现继承: 不能传参，会继承私有属性
* */
//Child.prototype = new Parent();
// Child.prototype = Object.create(Parent.prototype);
// Child.constructor = 'Child';
/*
* node推荐继承的方法  util.inherits(obj1,obj2)  => Object.create(Parent.prototype);
* */
util.inherits(Child, Parent);
var child = new Child();
function Person() {
    this.name = 'iwzyuan';
    this.parent = {
        name : 'parent'
    }
}
Person.prototype.toString = function () {
    return 'this is ' + this.name;
}
var p = new Person();
/*
*  showHidden, depth, colors
* */
console.log(util.inspect(p,true,1,true));
console.log(p.toString());

var arr1 = [1,2];
var arr2 = [3,4];
console.log(arr1.concat(arr2));//=>不改变原来数组
Array.prototype.push.apply(arr1, arr2);
console.log(arr1);
