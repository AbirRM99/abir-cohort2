const express = require("express")
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})
const postController = require("../controllers/post.controller")
const postRouter = express.Router()
const identifyUser = require("../middleware/auth.middleware")

postRouter.post("/",upload.single("img"),identifyUser,postController.createPostController)
postRouter.get("/",identifyUser,postController.getPostController)
postRouter.get("/details/:postId",identifyUser,postController.getPostDetailsController)
postRouter.post("/like/:postId",identifyUser,postController.likePostController)
postRouter.post("/unlike/:postId",identifyUser,postController.unlikePostController)
postRouter.get("/feed",identifyUser,postController.getFeedController)


module.exports = postRouter
