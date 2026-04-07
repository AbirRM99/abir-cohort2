const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

async function registerController(req, res) {
    const { username, bio, profileImage, password, email } = req.body

    const isUserAlreadyExist = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })
    if (isUserAlreadyExist) {
        return res.status(409).json({
            message: "user already exists" + (isUserAlreadyExist.email === email ? "Email already exist" : "username already exist")
        })
    }
    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        bio,
        profileImage,
        password: hash,
        email,
    })

    token = jwt.sign({
        id: user._id,
        username: user.username
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "user registered sucessfully",
        user: {
            email: user.email,
            username: user.username,
            bio: user.bio,
            profileImage: user.profileImage,
        }
    })
}

async function loginController(req, res) {
    const { username, email, password } = req.body

    const user = await userModel.findOne({
        $or: [
            {
                username: username
            },
            {
                email: email
            }
        ]
    })

    if (!user) {
        return res.status(404).json({
            message: "user not exist"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "invalid password"
        })
    }
    token = jwt.sign({
        id: user._id,
        username: user.username
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        message: "login success",
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage
        }
    })
}

module.exports = {
    registerController,
    loginController
}
