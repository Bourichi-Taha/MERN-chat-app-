const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    avatar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Upload",
        default: null
    },
    active: {
        type: Boolean,
        default: true
    },
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default:[]
        }
    ],
    requests: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default:[]
        }
    ],
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', User);