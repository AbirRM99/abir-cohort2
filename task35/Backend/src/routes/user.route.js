const express = require("express")
const userRouter = express.Router()
const identifyUser = require("../middleware/auth.middleware")
const followController = require("../controllers/follow.controller")

userRouter.post("/follow/:username",identifyUser,followController.followUserController)
userRouter.post("/unfollow/:username",identifyUser,followController.unfollowUserController)


module.exports = userRouter