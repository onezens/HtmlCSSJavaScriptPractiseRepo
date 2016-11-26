/**
 * Created by wangzhen on 16/11/26.
 */
const express = require('express');
const router = express.Router();
const checkNotLogin = require('../middlewares/check.js').checkNotLogin;

//GET 获取登录页
router.get('/', checkNotLogin, function(req, res, next){
    res.send(req.flash());
});

//POST 提交登录信息
router.post('/', checkNotLogin, function(req, res, next){
    res.send(req.flash());
});

module.exports = router;


