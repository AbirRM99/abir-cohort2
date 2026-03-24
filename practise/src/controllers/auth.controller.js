const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


async function registerController(req, res) {
    const { username, email, password, bio, profileImage } = req.body

    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            { email },
            { username }
        ]
    })
    if (isUserAlreadyExists) {
        return res.status(409).json({
            message: "user already exist with this credentials" + (isUserAlreadyExists.email == email ? "email already exist" : "username already exist")
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        bio,
        password: hash,
        profileImage
    })

    token = jwt.sign({
        id: user._id
    }, process.env, JWT_SECRET, { expiresIn: "id" })

    res.cookie("token", token)

    res.status(201).json({
        message: "user registered successfully",
        user: {
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage,
            username: user.username
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
            message: "user not found"
        })
    }
    isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "invalid password"
        })
    }

    token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET, { expiresIn: "id" })

    res.cookie("token", token)
    res.status(201).json({
        message: "login successfully",
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