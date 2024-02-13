const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    sender : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    chat : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Chat"
    },
    upload : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Upload",
        default:null
    },
    content : {
        type : String,
        default:null
    },
    type : {
        type : String,
        enum: ['text', 'media'] // Specify allowed values
    }
},
{
    timestamps : true
}
);

const Message = mongoose.model("Message",messageSchema);

module.exports = Message;