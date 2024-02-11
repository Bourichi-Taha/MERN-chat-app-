const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
    name : {
        type : String,
        default: null

    },
    isGroupChat : {
        type : Boolean
    },
    members : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    ],
    lastMessage : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Message",
        default: null
    },
    admin : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        default: null
    }
},
{
    timestamps : true,
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;