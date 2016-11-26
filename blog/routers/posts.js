/**
 * Created by wangzhen on 16/11/26.
 */
const express = require('express');
const router = express.Router();
const checkLogin = require('../middlewares/check.js').checkLogin;

//GET posts 获取所有的文章以及获取用户特定的文章页  eg: posts?auth=xxxx
router.get('/', function(req, res, next){
    res.send(req.flash());
});

//POST 发表文章
router.post('/', checkLogin, function(req, res, next){
    res.send(req.flash());
});

//GET 发表文章页
router.get('/create', checkLogin, function(req, res, next){
    res.send(req.flash());
});

//GET 单独一片文章页
router.get('/:postsId', function(req, res, next){
    res.send(req.flash());
});

//GET 获取更新文章页
router.get('/:postId/eidt', checkLogin, function(req, res, next){
    res.send(req.flash());
});

//POST 提交文章更新页
router.post('/:postId/edit', checkLogin, function(req, res, next){
    res.send(req.flash());
});

//GET 删除某一文章页
router.get('/:postId/remove', checkLogin,  function(req, res, next){
    res.send(req.flash());
});

//POST 创建一跳留言
router.post('/:postId/comment', checkLogin, function(req, res, next){
    res.send(req.flash());
});

//GET 删除一跳留言
router.get('/:postId/comment/:commentId/remove', checkLogin, function(req, res, next){
    res.send(req.flash());
});

module.exports = router;