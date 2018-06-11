var express = require('express');
var cookieParser = require('cookie-parser')
var app =express();
var querystring = require('querystring');

app.set('view engine','html');
app.set('views',__dirname);
app.engine('html',require('ejs').__express)

app.use(cookieParser('iwzy'));/*签名:iwzy*/
function checkLogin (req,res,next){
    console.log(req.cookies);
    /*if (req.cookies && req.cookies.username) {
        next();
    }else {
        res.redirect('/')
    }*/


    /*
    * 加密后的cookie存放在req.signedCookies中
    * */
    if (req.signedCookies && req.signedCookies.username) {
        next();
    }else {
        res.redirect('/')
    }

}
app.get('/',function (req,res) {
    res.render('index');
})
app.get('/login',function (req,res) {
    res.cookie('username',req.query.username,{
        signed : true
    });

    /*
    * res.redirect(path)  => 重定向访问地址
    * */
    res.redirect('/user');
    /*
    * 302服务器访问临时转移另一个地址
    * */
    /*res.statusCode = 302;
    res.setHeader('Location','/user');
    res.end();*/

})
app.get('/user',[checkLogin],function (req,res) {
    res.render('user',{
       /* username : req.cookies.username*/
        username : req.signedCookies.username
    });
})
app.listen(8080)