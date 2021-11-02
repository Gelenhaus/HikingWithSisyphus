const sequelize = require('../config/connection');
const { Post } = require('../models');

const postData = [
    {
        title: "Angels Landing",
        user_id: 1
        
    },
    {
        title: "The Wave",
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
