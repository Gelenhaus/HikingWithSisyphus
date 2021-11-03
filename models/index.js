// import all models
//const Post = require('./Post');
//const User = require('./User');
//const Comment = require('./Comment');
//const Hikes = require ('./Hikes');
//// create associations
//User.hasMany(Post, {
  // foreignKey: 'user_id'
//});
// User.hasMany(Comment, {
//  foreignKey: 'post_id'
// });

//Post.belongsTo(User, {
  // foreignKey: 'user_id'
//});
// Post.hasMany(Comment, {
  // foreignKey: 'post_id'
// });
// 
// Comment.belongsTo(User, {
//  foreignKey: 'user_id'
// });
// Post.belongsTo(Comment, {
  // foreignKey: 'post_id'
// });
// Comment.belongsTo(User, {
  // foreignKey: 'user_id'
// });
// User.hasMany(Comment, {
  // foreignKey: 'user_id'
// })
// Hikes.belongsTo(User, {
  // foreignKey: 'user_id'
// })
// User.hasMany(Hikes, {
  // foreignKey: 'user_id'
// })
//module.exports = { User, Post, Comment, Hikes };
// import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');
const Hikes = require ('./Hikes');
// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});
User.hasMany(Comment, {
 foreignKey: 'post_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

Comment.belongsTo(User, {
 foreignKey: 'user_id'
});
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});
User.hasMany(Comment, {
  foreignKey: 'user_id'
})
//Hikes.belongsTo(User, {
//  foreignKey: 'user_id'
//})
User.hasMany(Hikes, {
  foreignKey: 'user_id'
})




module.exports = { User, Post, Comment, Hikes };
