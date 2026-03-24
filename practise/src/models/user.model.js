const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        unique:[true,"username already exist"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already exist"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    bio:String,
    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/btuekn4kw/gray-picture-person-with-gray-background_1197690-22.avif"
    }
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel