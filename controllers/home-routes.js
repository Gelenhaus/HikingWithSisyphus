const router = require('express').Router();

//THis is where we need to get info from sequelize 
router.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = router;