const express = require("express");
const router = express.Router();

//all controllers are here

const {createComment}= require("../controller/commentController")
const {createPost , getAllPosts} = require("../controller/postsController")
const {createLike} = require("../controller/likedController")
const {unlike} = require('../controller/unlikeController')



//all routers are here

router.get('/dummyroutes' , (req , res) => {
    res.send(`<h1>This is dummy route</h1>`)
})
router.post('/likes/create',createLike )
router.post('/posts/create' ,createPost )
router.post('/comments/create' , createComment)
router.get('/get/comment', createComment)
router.get('/posts' , getAllPosts)

router.delete('/unlike/delete' , unlike )

module.exports = router;