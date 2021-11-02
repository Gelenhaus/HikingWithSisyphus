const router = require('express').Router();
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);



// const router = require('express').Router();

// const userRoutes = require('./user-routes.js');
// const postRoutes = require('./post-routes');
// const commentRoutes = require('./comment-routes');

// router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);

// module.exports = router;