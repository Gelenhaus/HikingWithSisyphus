const sequelize = require('../config/connection');
const { Comment } = require('../models');

const commentData = [
    {
        feedback: "great!",
        rating: 3,
        post_id: 1,
        user_id: 1
    },
    {
        feedback: "The hike was hard and was not shaded sp bring lots of water!",
        rating: 3,
        post_id: 2,
        user_id: 2
    },
    {
        feedback: "This hike was amazing!",
        rating: 3,
        post_id: 2,
        user_id: 3
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
