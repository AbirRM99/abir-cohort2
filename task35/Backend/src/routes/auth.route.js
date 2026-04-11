const express = require("express")
const userController = require("../controllers/user.controller")
const identifyUser = require("../middleware/auth.middleware")

authRouter = express.Router()

authRouter.post("/register", userController.registerController)
authRouter.post("/login", userController.loginController)
authRouter.get("/get-me", identifyUser, userController.getMeController)


module.exports = authRouter