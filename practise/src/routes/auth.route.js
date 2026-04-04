const express = require("express")
const authController = require("../controller/auth.controller")

authRouter = express.Router()

authRouter.post("/register",authController.registerController)

authRouter.post("/login",authController.loginController)

module.exports = authRouter
