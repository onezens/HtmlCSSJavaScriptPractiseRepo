/**
 * Created by wangzhen on 16/11/26.
 */
const express = require('express');
const path = require('path');
const sha1 = require('sha1');

const router = express.Router();
const users = require('../model/users');
const checkNotLogin = require('../middlewares/check.js').checkNotLogin;

//GET 获取注册页
router.get('/', checkNotLogin, function(req, res, next){
    //console.log('hello world');
    res.render('signup');
});

//POST 提交注册信息
router.post('/', checkNotLogin, function(req, res, next){
    //res.send(req.flash());
    console.warn('register user');
    console.info(req.fields);
    var name = req.fields.name;
    var gender = req.fields.gender;
    var bio = req.fields.bio;
    var avatar = req.files.avatar.path.split(path.sep).pop();
    var password = req.fields.password;
    var repassword = req.fields.repassword;
    try {
        //名字请限制在 2-10 个字符
        if(name.length < 2 || name.length > 10 ){
            throw new Error('名字请限制在 2-10 个字符');
        };
        //密码请限制在 6-20 个字符
        if(password.length < 6 || password.length > 20){
            throw new Error('密码请限制在 6-20 个字符');
        }
        //两次输入密码不一致
        if(password != repassword){
            throw new Error('两次输入密码不一致');
        }
        //性别只能是 m、f 或 x
        if(['m', 'f', 'x'].indexOf(gender.toString()) == -1){
            throw new Error('性别只能是 m、f 或 x');
        }
        //个人简介请限制在 5-30 个字符
        if(bio.length<5 || bio.length > 30){
            throw new Error('个人简介请限制在 5-30 个字符');
        }
        //缺少头像
        if(!avatar){
            throw new Error('缺少头像');
        }

    }catch(error){
        req.flash('error', error.message);
        return res.redirect('/signup');
    }
    //加密
    password = sha1(password);

    var user = {
        name: name,
        gender : gender,
        bio: bio,
        avatar: avatar,
        password: password
    };
    console.log(user);

    users.create(user).then(function(result){
        console.log(result);
        user = result.ops[0];
        delete user.password;
        req.session.user = user;
        req.flash('success', '注册成功!');
        res.redirect('/posts');
    }).catch(function(error){
        console.warn('注册失败!');
        console.log(error);
        // 用户名被占用则跳回注册页，而不是错误页
        if (error.message.match('E11000 duplicate key')) {
            req.flash('error', '用户名已被占用');
            return res.redirect('/signup');
        }
        next(error);
    });
});

module.exports = router;
