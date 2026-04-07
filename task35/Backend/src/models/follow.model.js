const mongoose = require("mongoose")

const followSchema = new mongoose.Schema({
    follower: {
        type: String
        // type: mongoose.Schema.Types.ObjectId,
        // ref:"users",
        // required:[true,"follower is required"]
    },
    followee: {
        type: String
        // type: mongoose.Schema.Types.ObjectId,
        // ref:"users",
        // required:[true,"followee is required"]
    },
    status: {
        type: String,
        default: "pending",
        enum: {
            values: ["pending", "accepted", "rejected"],
            message: "status can only be pending, accepted or rejected"
        }
    }
}, {
    timestamps: true
})

followSchema.index({ follwer: 1, followee: 1 }, { unique: true })

const followModel = mongoose.model("follows", followSchema)

module.exports = followModel
