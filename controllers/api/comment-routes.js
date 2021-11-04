//const router = require('express').Router();
//const { Comment } = require('../../models');
//const sequelize = require('../../models')
//const withAuth = require('../../utils/auth')


const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth')

router.get("/", (req, res) => {
Comment.findAll()
.then(dbCommentData => res.json(dbCommentData))
.catch(err => {
    console.log(err)
    res.status(500).json(err)
})
})
<<<<<<< HEAD

router.post("/", (req, res) => {
Comment.create({
    feedback: req.body.feedback,
    user_id: req.body.user_id,
    post_id: req.body.post_id
})
.then(dbCommentData => res.json(dbCommentData))
.catch(err => {
    console.log(err);
    res.status(400).json(err)
})
})

=======

router.post("/", (req, res) => {
Comment.create({
    feedback: req.body.feedback,
    user_id: req.body.user_id,
    post_id: req.body.post_id
})
.then(dbCommentData => res.json(dbCommentData))
.catch(err => {
    console.log(err);
    res.status(400).json(err)
})
})

>>>>>>> camerons-branch
router.delete("/:id", (req, res) => {
Comment.destroy({
    where: {
        id: req.params.id
    }
})
 .then(dbCommentData => {
     if (!dbCommentData) {
         res.status(404).json({ message: "No comment found with this id!" })
         return
     }
     res.json(dbCommentData)
 })
 .catch(err => {
     console.log(err)
     res.status(500).json(err)
 })
})

module.exports = router;
