var mongoose = require("mongoose");
var mongodb = require('mongodb')
var db = mongoose.connect("mongodb://127.0.0.1:27017/test", function (err) {
    if (!err) {
        //集合的数据模型定义  定义了字段名和字段的类型 默认值
        var PersonSchema = new mongoose.Schema({
            name: {type: String},
            age: {type: Number, default: 0},
        }, {timestamps: false}, {
            colloection: true
        }) //timestamps  schema映射的文档document会自动添加createdAt和updatedAt这两个字段，代表创建时间和更新时间
        PersonSchema.add({ //add方法是追加数据模型定义
            time: {type: Date, default: Date.now()},
            email: {type: String, default: ''}
        })
        //创建Model  是通过数据库连接创建的（集体）
        var Person = mongoose.model("Person", PersonSchema)
        Person.create([{name: 100, age: 100}, {name: 'iwzy1', age: 200}], function (err, doc) {
            // console.log('create------ '+ doc);
        })
        //在collections中查询

        Person.find({
            $where: function () {
                return this.name != this.age
            }
        }, function (err, docs) {
            // console.log('find------ ' + docs);
        })
        Person.update({age:{$gte : 1}},{age:40,name:40},{multi:true},function (err,raw) {
            console.log(raw);
        })
    }
});
