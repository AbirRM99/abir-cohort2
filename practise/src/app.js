const express = require("express")
const app = express()
const authRouter = require("./routes/auth.route")
const cookieParser = require("cookie-parser")
const postRouter = require("./routes/post.route")

app.use("/api/auth",authRouter)
app.use("/api/post",postRouter)
app.use(cookieParser())


app.use(express.json())

module.exports = app