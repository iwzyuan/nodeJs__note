/*
* user-agent User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36
* */
var express = require('express');
var path = require('path');

var agentParser = require('user-agent-parser')
var app = express();
var visit = {mobile:0,other:0};
app.listen(80);

app.use(function (req,res,next) {
    req.agent = agentParser(req.headers['user-agent'||''])
    next();
})
app.get('/',function (req,res) {
    console.log(req.agent);
    if (req.agent.device.type == 'mobile'){
        visit.mobile = visit.mobile+1;
    } else {
        visit.other = visit.other+1
    }
    res.send(visit);
})