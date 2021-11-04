const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
// const commentRoutes = require('./comment-routes');
const hikesRoutes = require('./hikes-routes')

router.use('/users', userRoutes);
router.use('/post', postRoutes);
// router.use('/comment', commentRoutes);
router.use('/hikes', hikesRoutes);

module.exports = router;