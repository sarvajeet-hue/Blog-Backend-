
const Post = require('../model/postModel');

exports.createPost = async(req , res) => {

    try{ 
        const {title , body } = req.body;
        const createdPost = await Post.create({title , body})

        res.status(200).json({
            post : createdPost
        })


    }

    catch(error){
        console.log(error);
        res.status(500).json({
            success :false,
            message : "post Not Created"
        })
    }
}


exports.getAllPosts = async(req , res) => {
    try{
        const allPost = await Post.find();

        res.status(200).json({
            allPosts : allPost
        })
    }

    
    catch(error){
        console.log(error)
        res.status(500).json({
            success :false,
            message : "Not Getting any post"
        })
    }

}