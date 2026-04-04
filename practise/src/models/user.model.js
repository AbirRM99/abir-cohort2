const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "user name already exists"],
        required: [true, "user name is required"],
    },
    email: {
        type: String,
        unique: [true, "email already exists"],
        required: [true, "email is required"],
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    bio: String,
    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/btuekn4kw/gray-picture-person-with-gray-background_1197690-22.avif"
    }
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel