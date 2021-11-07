const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Hikes } = require('../../models');
const withAuth = require('../../utils/auth')


router.get('/', (req, res) => {

    Hikes.findAll({
        attributes: [
            'id',
            'name',
            'location',
            'elevation_gain',
            'distance',
            'difficulty',
            'dog_friendly',
            'permit'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'feedback', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbhikesData => res.json(dbhikesData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;