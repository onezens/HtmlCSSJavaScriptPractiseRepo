/**
 * Created by wangzhen on 16/11/29.
 */

const User = require('../lib/mongo.js').User;

module.exports = {
    create: function(user){
        return User.create(user).exec();
    }
};
