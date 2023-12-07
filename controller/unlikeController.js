const Liked = require('../model/likedModel')
const Post = require('../model/postModel')


exports.unlike = async(req , res) => {
    try{
        const {like , post} = req.body
        const unlikePost = await Liked.findByIdAndDelete(like)

        const updated = await Post.findByIdAndUpdate(post , {$pull : {likes : unlikePost._id}} , {new : true})

        res.status(200).json({
            success: true,
            message: "unlike the Post",
            post : updated

        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            success :false,
            message : "not unlike "
        })
    }
}