const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Hikes } = require('../../models');
const withAuth = require('../../utils/auth')


router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            //'content',
            'create_at'
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: [''],
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
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;
