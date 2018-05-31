function Person() {
    this.name = 'iwzyuan';
}
/*
* 1.创建空对象
* 2. 把空对象作为this，传入Person
* 3. 返回这个对象
* */
var p = new Person();
console.log(p.name);
var P2 = Person.bind({name : 'haha'});
var p2 = new P2;
console.log(p2.name); //iwzyuan这里的bind没用