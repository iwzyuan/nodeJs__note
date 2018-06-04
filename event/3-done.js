var fs = require('fs');
var count = 0;
var person = {}
fs.readFile('name.txt',function (err,data) {
    person.name = data.toString();
    if(++count == 2){
        outPut( person.name, person.age)
    }
});
fs.readFile('age.txt',function (err,data) {
    person.age = data.toString();
    if(++count == 2){
        outPut( person.name, person.age)
    }
});
var name = person.name;
var age = person.age;
function outPut( name , age ) {
    console.log(name, age);
}