/**
 * Created by wangzhen on 16/11/30.
 */

const marked = require('marked');
const comment = require('../lib/mongo').Comment;

comment.plugin('contentToHtml', {
    afterFind: function(comments) {
        return comments.map(function(comment){
            comment.content = marked(comment.content);
            return comment;
        })
    }
})

module.exports = {
    create: function (com){
        return comment.create(com).exec();
    },
    delCommentById: function(commentId, author){
        return comment.remove({author: author, _id: commentId}).exec();
    },
    getComments: function(postId){
        return comment
            .find({postId: postId})
            .populate({path: 'author', model: 'User'})
            .sort({_id: 1})
            .addCreatedAt()
            .contentToHtml()
            .exec();
    },
    getCommentsCount: function(postId){
        return comment.count({postId: postId}).exec();
    }
}
