const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');

// Post have many comments
Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
  });
// Post belong to user
Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});
// Comments for users
Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });

module.exports = { User, Comment, Post };