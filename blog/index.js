/**
 * Created by wangzhen on 16/11/23.
 */

const express = require('express');
const path = require('path');
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const config = require('config-lite');
const routers = require('./routers');
const pkg = require('./package.json');

const port = 3000;
const app = express();
//设置模板目录
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//设置静态文件的目录
app.use(express.static(path.join(__dirname, 'public')));

//设置session中间件
app.use(session({
    name: config.session.key,  //cookie 中  session id
    secret: config.session.secret, // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
    cookie: {
        maxAge: config.session.maxAge // 过期时间，过期后 cookie 中的 session id 自动删除
    },
    store: new mongoStore({ //将 session 存储到 mongodb
        url: config.mongodb // mongodb 地址
    })
}));

//使用flash中间件
app.use(flash());

routers(app);

//监听端口, 启动程序
app.listen(config.port, function(){
    console.log(pkg.name + ' start success, listen on port ' + config.port);
});