const mongoose = require("mongoose")

const likedSchema = new mongoose.Schema({
    post: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post"
    },
    user : {
        type :String ,
        required : true,
    }
    

})

module.exports = mongoose.model("Liked" ,likedSchema)