const sequelize = require('../config/connection');
const { Comment } = require('../models');

const commentData = [
    {
        feedback: "great",
        rating: 3,
        post_id: 1,
        user_id: 1
    },
    {
        feedback: "great",
        rating: 3,
        post_id: 2,
        user_id: 2
    },
    {
        feedback: "great",
        rating: 3,
        post_id: 2,
        user_id: 3
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
