const User = require('./User');
const userPost = require('./userPost');
const userComment = require('./userComment');

User.hasMany(userPost, {
    foreignKey: 'user_id'
});

userPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

userComment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
userComment.belongsTo(userPost, {
    foreignKey: 'userpost_id'
});
  
User.hasMany(userComment, {
    foreignKey: 'user_id'
});
  
userPost.hasMany(userComment, {
    foreignKey: 'userpost_id',
    onDelete: 'CASCADE'
});

module.exports = { User, userPost };
