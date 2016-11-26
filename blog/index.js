/**
 * Created by wangzhen on 16/11/23.
 */

const express = require('express');
const path = require('path');

const indexRouter = require('./routers/index');
const usersRouter = require('./routers/users');

const port = 3000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(function(req, res, next){
//    console.log(1);
//    next(new Error('hahahahh'));
//});
//
//app.use(function(req, res, next){
//    console.log('2');
//    res.status(200).end;
//});

function m1(res, req, next) {
    console.log('m1');
    next();
}
function m2(res, req, next) {
    console.log('m2');
    next();
}
function m3(res, req, next){
    console.log('m3');
    next();
}

app.use('/users',m1, m2, m3, usersRouter);
app.use('/', indexRouter);


app.listen(port);

console.log('express start success ! port : ' + port);