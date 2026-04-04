const mongoose  =require("mongoose")

const postSchema = new mongoose.Schema({
    caption:{
        type: String,
        default:""
    },
    imgUrl:{
        type:String,
        required:[true,"image is required to create a post"]
    },
    user:{
        ref:"users",
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"user id required for post creation"]
    }
})

const postModel =  mongoose.model("posts",postSchema)

module.exports = postModel