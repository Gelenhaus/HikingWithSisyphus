
const { Comment } = require('../models');

const commentData = [
    {
        feedback: "great!",
        rating: 5,
        post_id: 1,
        user_id: 1
    },
    {
        feedback: "The hike was hard and was not shaded so bring lots of water!",
        rating: 4,
        post_id: 2,
        user_id: 2
    },
    {
        feedback: "This hike was amazing!",
        rating: 5,
        post_id: 2,
        user_id: 3
    },
    {
        feedback: "Had beautiful views the whole time. Not recommended for young kids",
        rating: 4,
        post_id: 3,
        user_id: 1 
    },
    {
        feedback: "This was such a good hike! Great for younger kids because it's not too long and is pretty easy.",
        rating: 5,
        post_id: 3,
        user_id: 7
    },
    {
        feedback: "What a hard hike! It was difficult but totally worth it. Definetely a must do if you're in the area.",
        rating: 5,
        post_id: 3,
        user_id: 7
    },

]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
