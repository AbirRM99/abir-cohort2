const express = require("express")
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const crypto = require("crypto");

const authRouter = express.Router()

authRouter.post("/register", async (req, res) => {
    const { email, name, password } = req.body

    const isUserAlreadyExists = await userModel.findOne({ email })

    if (isUserAlreadyExists) {
        return res.status(400).json({
            message: "User already exist with this email"
        })
    }

    const hash = crypto.createHash("md5").update(password).digest("hex")

    const user = await userModel.create({
        email, name, password: hash
    })

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        process.env.JWT_SECRET, {expiresIn:"1h"}
    )

    res.cookie("jwt_token", token)

    res.status(201).json({
        message: "User Registered",
        user,
        token
    })

})

authRouter.post("/protected", (req, res) => {
    console.log(req.cookies);

    res.status(200).json({
        message: "this is protected route"
    })
})

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(404).json({
            message: "user not found with this email address"
        })
    }
    const isPasswordMatched = user.password === crypto.createHash("md5").update(password).digest("hex")

    if (!isPasswordMatched) {
        return res.status(401).json({
            message: "Invalid Password"
        })
    }
    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET)

    res.cookie("jwt_token", token)

    res.status(200).json({
        message: "user logged in",
        user,
    })
})

authRouter.get("/get-me", async(req,res)=>{
    const token = req.cookies.jwt_token

   const decode = jwt.verify(token,process.env.JWT_SECRET)

   const user = await userModel.findById(decode.id)

   res.json({
    name:user.name,
    email:user.email
   })
   
})

module.exports = authRouter