const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
    name : {
        type : String
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
        ref : "Message"
    },
    admin : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
},
{
    timestamps : true,
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;