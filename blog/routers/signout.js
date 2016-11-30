/**
 * Created by wangzhen on 16/11/26.
 */
const express = require('express');
const router  = express.Router();
const checkLogin = require('../middlewares/check.js').checkLogin;

//GET 注销
router.get('/', checkLogin, function(req, res, next){
    req.session.user = null;
    req.flash('success', '注销成功!');
    res.redirect('/posts');
});

module.exports = router;

