/**
 * Created by wangzhen on 16/11/29.
 */

const config = require('config-lite');
const Mongolass = require('mongolass');
const moment = require('moment');
const  objIdToTimestamp = require('objectid-to-timestamp');

const mongolass = new  Mongolass();
mongolass.connect(config.mongodb);

mongolass.plugin('addCreatedAt', {
    afterFind: function(results) {
        results.forEach(function(result){
            results.created_at = moment(objIdToTimestamp(result._id)).format('YYYY-MM-DD HH:mm');
        });
        return results;
    },
    afterFindOne: function(result) {
        if(result){
            result.created_at = moment(objIdToTimestamp(result._id)).format('YYYY-MM-DD HH:mm');
        }
        return result;
    }
})

exports.User = mongolass.model('User', {
    name: {type: 'string'},
    password: {type: 'string'},
    avatar: {type: 'string'},
    gender: {type: 'string', enum: ['m', 'f', 'x']},
    bio: {type: 'string'}
});
exports.User.index({name: 1}, {unique: true}).exec();

exports.Post = mongolass.model('Post', {
    author: {type: Mongolass.Types.ObjectId},
    title: {type: 'string'},
    content: {type: 'string'},
    pv: {type: 'number'}
});
exports.Post.index({author: 1, _id: -1}).exec();

exports.Comment = mongolass.model('Comment', {
    author: {type: Mongolass.Types.ObjectId},
    content: {type: 'string'},
    postId: {type: Mongolass.Types.ObjectId}
});
exports.Post.index({postId: 1, _id: -1}).exec();
exports.Post.index({author: 1, _id: 1}).exec();



