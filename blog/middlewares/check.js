/**
 * Created by wangzhen on 16/11/25.
 */
module.exports = {
    checkLogin: function(req,  res, next){
        if(!req.session.user){
            req.flash('error', 'not login');
            return res.redirect('/signin');
        }
        next();
    },
    checkNotLogin: function(req, res, next) {
        if(!req.session.user){
            req.flash('error', 'have login');
            return res.redirect('back'); //back previous page
        }
        next();
    }
}