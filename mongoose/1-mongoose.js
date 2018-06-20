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
            email: {type: String, default: ''},
            hobby : {type:String}
        })
        /*
        * 动态方法
        * */
        PersonSchema.method('mySave',function (cb) {
            //通用方法=》实例
            this.hobby = 'drink'
            doc1.save(cb);
        })
        /*
        * 静态方法
        * */
        PersonSchema.static('findByName',function (name,callback) {
            //this -> model
            return this.find({name:name},callback)
        })
        //创建Model  是通过数据库连接创建的（集体）
        var Person = mongoose.model("Person", PersonSchema)
        //通过模型创建实体（个体）entity
        var doc1 = new Person({
            name: 'iwzyuan',
            age: 1
        })
        //保存至数据库
        doc1.mySave(function (err, doc) {
            console.log('mysave------ '+doc);
            //doc为添加的实例详细信息
            // console.log('save------ '+doc);
        })
        //Model调用的是creat(doc(s),[options],[callback]) | insertMany(doc(s),[options],[callback])  entity调用的是save
        Person.create({name: 100, age: 100}, {name: 'iwzy1', age: 200}, function (err, doc) {
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
/*
* 查询方法：
*   Model.find(conditions, [projection], [options], [callback])
*   Model.findById(id, [projection], [options], [callback])  按ID进行查找
*   Model.findOne([conditions], [projection], [options], [callback]) 查找符合文档的第一个文档
* */
/*
$or　　　　或关系
$nor　　　 或关系取反
$gt　　　　大于
$gte　　　 大于等于
$lt　　　　小于
$lte　　　 小于等于
$ne　　　　不等于
$in　　　　在多个值范围内
$nin　　　 不在多个值范围内
$all　　　 匹配数组中多个值
$regex　　 正则，用于模糊查询
$size　　　匹配数组大小
$maxDistance　范围查询，距离（基于LBS）
$mod　　　　取模运算
$near　　　 邻域查询，查询附近的位置（基于LBS）
$exists　　 字段是否存在
$elemMatch　匹配内数组内的元素
$within　　　范围查询（基于LBS）
$box　　　　 范围查询，矩形范围（基于LBS）
$center　　　范围醒询，圆形范围（基于LBS）
$centerSphere　范围查询，球形范围（基于LBS）
$slice　　　　查询字段集合中的元素（比如从第几个之后，第N到第M个元素
* */
/*
$where  this可以替换成obj
temp.find({$where:"this.x == this.y"},function(err,docs){
    //[ { _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc889, name: 'li', age: 20, x: 2, y: 2 } ]
    console.log(docs);
})
temp.find({$where:function(){
        return this.x !== this.y;
    }},function(err,docs){
    //[ { _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 },
    //{ _id: 5972ed35e6f98ec60e3dc888, name: 'huo', age: 30, x: 2, y: 1 } ]
    console.log(docs);
})
* */
/*
文档更新
update(conditions, doc, [options], [callback])
updateMany()  //更新多条即使options->multi:false也无用
updateOne()   //只更新一条文档即使options->multi:ture也没用
-----------------------------
find() + save()
temp.find({age:{$lt:20}},function(err,docs){
    //[ { _id: 5971f93be6f98ec60e3dc86d, name: 'wang', age: 10 },
    //{ _id: 5971f93be6f98ec60e3dc86f, name: 'li', age: 12 }]
    console.log(docs);
    docs.forEach(function(item,index,arr){
        item.name += '30';
        item.save();
    })
    //[ { _id: 5971f93be6f98ec60e3dc86d, name: 'wang30', age: 10 },
    // { _id: 5971f93be6f98ec60e3dc86f, name: 'li30', age: 12 }]
    console.log(docs);
});
------------------------
------------------------
findOne() + save()  //如果需要更新的操作比较复杂，可以使用findOne()+save()方法来处理，比如找到名字为'huochai'的数据，年龄加100岁
temp.findOne({name:'huochai'},function(err,doc){
    //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 10 }
    console.log(doc);
    doc.age += 100;
    doc.save();
    //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 110 }
    console.log(doc);
});
------------------------
findByIdAndUpdate([conditions], [update], [options], [callback])
fingOneAndUpdate([conditions], [update], [options], [callback])

* */

/*
文档删除
---------------------------
Collections.remove(conditions, [callback]) //remove方法既可以给collections用也可以给document用
document.remove([callback])
temp.find({name:/huo/},function(err,doc){
    doc.forEach(function(item,index,arr){
        item.remove(function(err,doc){
            //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 30 }
            //{ _id: 5971f93be6f98ec60e3dc86e, name: 'huo', age: 60 }
            console.log(doc);
        })
    })
})
---------------------------
findOneAndRemove(conditions, [options], [callback])
temp.findOneAndRemove({age:{$lt:20}},function(err,doc){
    //{ _id: 5972d3f3e6f98ec60e3dc873, name: 'wang', age: 18 }
    console.log(doc);
})
---------------------------
findByIdAndRemove(id, [options], [callback])
var aIDArr = [];
temp.find(function(err,docs){
    docs.forEach(function(item,index,arr){
        aIDArr.push(item._id);
    })
    temp.findByIdAndRemove(aIDArr[0],function(err,doc){
        //{ _id: 5972d754e6f98ec60e3dc882, name: 'huochai', age: 27 }
        console.log(doc);
    })
})
* */