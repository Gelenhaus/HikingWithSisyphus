const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
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
<<<<<<< HEAD
    });
});

module.exports = router
=======
    })
})

module.exports = router;
>>>>>>> 3435c64e497bff87ff15bd4b6034056a7c4cba5b
