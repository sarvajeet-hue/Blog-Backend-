const Liked = require('../model/likedModel');
const Post = require('../model/postModel');

exports.createLike = async (req, res) => {

    try {
        const { post, user } = req.body;
        const likedPost = await Liked.create({post , user});

        const updatedPost = await Post.findByIdAndUpdate(post , {$push : {likes : likedPost._id}} , {new :true})

        res.status(200).json({
            like : likedPost,
            post : updatedPost
        })

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success :false,
            message : "No liked Data FOund"
        })
    }
}