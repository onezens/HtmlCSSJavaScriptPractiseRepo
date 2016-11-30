/**
 * Created by wangzhen on 16/11/26.
 */
const express = require('express');

const postModel = require('../model/posts');
const commentModel = require('../model/comments');
const router = express.Router();
const checkLogin = require('../middlewares/check.js').checkLogin;

//GET posts 获取所有的文章以及获取用户特定的文章页  eg: posts?auth=xxxx
router.get('/', function(req, res, next){
    //res.send(req.flash());
    //res.render('posts');
    var author = req.query.author;
    postModel.getPosts(author).then(function(posts){
        res.render('posts', {
           posts:  posts
        });
    }).catch(next);
});

//POST 发表文章
router.post('/', checkLogin, function(req, res, next){
    //res.send(req.flash());
    var author = req.session.user._id;
    var title = req.fields.title;
    var content = req.fields.content;

    try{
        if(!title.length){
            throw new Error('请输入文章标题');
        }
        if(!content.length){
            throw new Error('请输入文章');
        }

    }catch(error){
        req.flash('error', error.message);
        return res.redirect('back');
    }

    var post = {
        author: author,
        title: title,
        content: content,
        pv: 0
    };

    console.log(post);

    postModel.create(post).then(function(result){
        post = result.ops[0];
        req.flash('success', '发布成功!');
        res.redirect(`/posts/${post._id}`);
    }).catch(function(error){
        console.log(error);
        next(error);
    });
});

//GET 发表文章页
router.get('/create', checkLogin, function(req, res, next){
    //res.send(req.flash());
    res.render('create');
});

//GET 单独一片文章页
router.get('/:postId', function(req, res, next){
    //res.send(req.flash());
    var postId = req.params.postId;
    if(!postId) throw new Error('文章id不存在!');
    Promise.all([
        postModel.getPostById(postId),
        commentModel.getComments(postId),
        postModel.incPv(postId)
    ]).then(function(result){
        console.log(result);
        var post = result[0];
        var comments = result[1];
        if (!post){
            throw new Error('文章不存在!');
        }
        res.render('post', {
            post: post,
            comments: comments
        });
    }).catch(next);
});

//GET 获取更新文章页
router.get('/:postsId/edit', checkLogin, function(req, res, next){
    //res.send(req.flash());
    var postId = req.params.postsId;
    var author = req.session.user._id;
    postModel.getRawPostById(postId).then(function(post){

        if (!post){
            throw new Error('文章不存在!');
        }
        if(author.toString() != post.author._id.toString()){
            throw new Error('权限不足!');
        }

        res.render('edit', {
            post: post
        });

    }).catch(next);
});

//POST 提交文章更新页
router.post('/:postId/edit', checkLogin, function(req, res, next){
    //res.send(req.flash());
    var postId = req.params.postId;
    var author = req.session.user._id;
    var title = req.fields.title;
    var content = req.fields.content;
    postModel.updatePostById(postId, author, {title: title, content: content}).then(function(){
        req.flash('success', '编辑文章成功!');
        res.redirect(`/posts/${postId}`);
    }).catch(next);

});

//GET 删除某一文章页
router.get('/:postId/remove', checkLogin,  function(req, res, next){
    //res.send(req.flash());
    var postId = req.params.postId;
    var author = req.session.user._id;
    //console.log(postId + " "  + author);
    postModel.delPostById(postId, author).then(function(re){
        //console.log(re);
        req.flash('success', '删除文章成功!');
        res.redirect('/posts');
    }).catch(next);
});

//POST 创建一跳留言
router.post('/:postId/comment', checkLogin, function(req, res, next){
    //res.send(req.flash());
    var author = req.session.user._id;
    var postId = req.params.postId;
    var content = req.fields.content;
    var comment = {
        author: author,
        postId: postId,
        content: content
    };
    console.log(comment);

    commentModel.create(comment).then(function(){
        req.flash('success', '留言成功!');
        res.redirect('back');
    }).catch(next);
});


//GET 删除一跳留言
router.get('/:postId/comment/:commentId/remove', checkLogin, function(req, res, next){
    //res.send(req.flash());
    var commentId = req.params.commentId;
    var author = req.session.user._id;
    commentModel.delCommentById(commentId, author).then(function(){
        req.flash('success', '删除成功!');
        res.redirect('back');
    }).catch(next);
});

module.exports = router;