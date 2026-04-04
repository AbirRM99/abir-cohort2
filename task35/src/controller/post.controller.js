const postModel = require("../models/post.model")
const Imagekit = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")
const { toFile } = require("@imagekit/nodejs")

const imagekit = new Imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function createPostController(req, res) {
    // console.log(req.file)
    console.log(req.body, req.file)




    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test",
        folder: "cohort-2-insta-clone-posts"
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

    const posts = await postModel.find({
        user: userId
    })

    res.status(200).json({
        message: "post fetched successfully",
        posts
    })
}
async function getPostDetailsController(req, res) {


    const userId = req.user.id
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if (!post) {
        return res.status(404).json({
            message: "Posts not found."
        })
    }

    const isValidUser = post.user.toString() === userId

    if (!isValidUser) {
        return res.status(403).json({
            message: "forbidden content"
        })
    }

    return res.status(200).json({
        message: "posts fetched",
        post
    })

}

module.exports = {
    createPostController,
    getPostController,
    getPostDetailsController
}