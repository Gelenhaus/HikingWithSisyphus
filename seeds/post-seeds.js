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
    },
    {
        title: "Lake Blanche",
        user_id: 5
    },
    {
        title: "Observation Point",
        user_id: 1
    },
    {
        title: "Mount Olympus",
        user_id: 5
    }, 
    {
        title: "Donut Falls",
        user_id: 6
    },
    {
        title: "The Great Gallery",
        user_id: 6
    },
    {
        title: "Mesa Arch",
        user_id: 6
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
