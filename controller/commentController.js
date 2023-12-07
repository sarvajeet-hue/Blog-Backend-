

const Comment = require("../model/commentModel")
const Post = require("../model/postModel")


exports.createComment = async (req, res) => {


    try {



        const { post, user, body } = req.body;
        const savedComment = await Comment.create({ post, user, body });

        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true }).populate("comments").exec()
            

        res.status(200).json({
            comment : savedComment,
            post: updatedPost
        })
    }

    catch (error) {
        res.status(500).json({
            success: false,
            message: "Not Found ho rha hai"
        })
    }

}