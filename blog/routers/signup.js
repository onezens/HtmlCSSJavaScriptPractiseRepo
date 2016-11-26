/**
 * Created by wangzhen on 16/11/26.
 */
const express = require('express');
const router = express.Router();
const checkNotLogin = require('../middlewares/check.js').checkNotLogin;

//GET 获取注册页
router.get('/', checkNotLogin, function(req, res, next){
    res.send(req.flash());
});

//POST 提交注册信息
router.post('/', checkNotLogin, function(req, res, next){
    res.send(req.flash());
});

module.exports = router;
