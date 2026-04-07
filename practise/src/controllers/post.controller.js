const postModel = require("../models/post.model")
const Imagekit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")
const likeModel = require("../models/likes.model")

const imagekit = new Imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function CreatePostController(req, res) {


    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        filename: "xyz",
        folder: "jaiowdhi"
    })

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: req.user.id
    })

    res.status(201).json({
        message: "post created successfully",
        post
    })
}

async function getPostController(req, res) {
    const userId = req.user.id

    const post = await postModel.find({
        user: userId
    })

    res.status(201).json({
        message:"post fetched",
        post
    })
}

async function getPostDetailsController(req,res){
    const userId = req.user.id
    const postId = req.params.postId

    const postDetails = await postModel.findById(postId)

    if(!postDetails){
        return res.status(404).json({
            message:"post not found"
        })
    }

    const isValidUser = postDetails.user.toString()===userId

    if(!isValidUser){
        return res.status(403).json({
            message:"forbidden content"
        })
    }

    return res.status(201).json({
        message:"post fetched",
        postDetails
    })
}

async function likePostsController(req,res){
    const username = req.user.id
    const postId = req.params.postId

    const post = await likeModel.findById(postId)
    if(!post){
        return res.status(404).json({
            message:"not found"
        })
    }

    const like = await likeModel.create({
        post:postId,
        user:username
    })

    res.status(201).json({
        message:"liked success",
        like
    })

}

module.exports = {
    CreatePostController,
    getPostController,
    getPostDetailsController,
    likePostsController
}