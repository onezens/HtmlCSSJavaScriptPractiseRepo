/**
 * Created by wangzhen on 16/11/24.
 */

const express = require('express');
const router = express.Router();

//router.get('/', function(req, res){
//    res.send('index router');
//});
//module.exports = router;
//

module.exports = function(app){
    app.get('/', function(req,  res){
        res.redirect('/posts');
    });
    app.use('/signin', require('./signin'));
    app.use('/signup', require('./signup'));
    app.use('/signout', require('./signout'));
    app.use('/posts', require('./posts'));
    app.use(function (req, res) {
        if (!res.headersSent) {
            res.render('404');
        }
    });
};