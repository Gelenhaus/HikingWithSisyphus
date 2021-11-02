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
    },
    {
        title: "Delicate Arch",
        user_id: 3
    },
    {
        title: "Mount Timpanogos",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
