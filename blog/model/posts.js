/**
 * Created by wangzhen on 16/11/30.
 */
const marked = require('marked');
const Post = require('../lib/mongo').Post;
const commentModel = require('./comments');

Post.plugin('contentToHtml', {
    afterFind: function(posts){
        return posts.map(function(post){
            post.content = marked(post.content);
            return post;
        });
    },
    afterFindOne: function(post){
        if(post){
            post.content = marked(post.content);
        }
        return post;
    }
});

Post.plugin('addCommentsCount', {
    afterFind: function(posts){
        return Promise.all(posts.map(function(post){
            return commentModel.getCommentsCount(post._id).then(function(commentsCount){
                post.commentsCount = commentsCount;
                return post;
            });
        }));
    },
    afterFindOne: function(post) {
        if(post) {
            return commentModel.getCommentsCount(post._id).then(function(commentsCount){
                post.commentsCount = commentsCount;
                return post;
            });
        }
        return post;
    }
});

module.exports = {
    create: function(post){
        return Post.create(post).exec();
    },
    getPostById: function(postId){
        return Post
            .findOne({_id: postId})
            .populate({path: 'author', model: 'User'})
            .addCreatedAt()
            .addCommentsCount()
            .contentToHtml()
            .exec();
    },
    getPosts: function(author){
        var query = {};
        if(author){
            query.author = author;
        }
        return Post
            .find(query)
            .populate({path: 'author', model: 'User'})
            .addCreatedAt()
            .addCommentsCount()
            .contentToHtml()
            .exec()
    },
    incPv: function(postId){
        return Post
            .update({id: postId}, {$inc: {pv: 1}})
            .exec();
    },
    getRawPostById: function(postId){
        return Post
            .findOne({_id: postId})
            .populate({path: 'author', model: 'User'})
            .exec();
    },
    updatePostById: function(postId, author, data){
        return Post
            .update({author: author, _id: postId}, {$set: data})
            .exec();
    },
    delPostById: function(postId, author){
        return Post
            .remove({author: author, _id: postId})
            .exec();
    }
}

