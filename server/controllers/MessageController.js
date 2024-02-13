const Chat = require("../models/Chat");
const Message = require("../models/Message");
const asyncHandler = require("express-async-handler");

// @ desc Get all messages
// @route GET /messages
// @access Private
// const getAllMessages = asyncHandler(async (req,res) => {
//     const userId = req.user._id;
//     // stoped at creating message controller
//     return res.json(req.user);
// });

const getAllMessagesOfChat = asyncHandler(async (req, res) => {
    // const userId = req.user._id;
    const chatId = req.params.id;
    const messages = await Message.find({ chat: chatId }).populate('upload');
    if (messages.length === 0) {
        return res.status(200).json([]);
    }
    return res.status(200).json(messages);
});

// @ desc create a message
// @route POST /message
// @access Public
const createMessage = asyncHandler(async (req, res) => {
    const { content, upload, type, chat: chatId } = req.body;
    const sender = req.user;
    const chat = await Chat.findOne({ _id: chatId, members: sender._id });
    if (!sender || !type || !chat) {
        //confirm inputs
        return res.status(400).json({ message: 'All fields are required!' });
    }
    if (!content && !upload) {
        //confirm inputs
        return res.status(400).json({ message: 'All fields are required!' });
    }
    if (type === 'text' && content) {
        await Message.create({ content, type, chat: chat._id, sender: sender._id });
        return res.status(201).json({ message: `New message has been sent!${chatId}` });
    } else if (type === 'media' && upload) {
        await Message.create({ upload, type, chat: chatId, sender: sender._id });
        return res.status(201).json({ message: `New message has been sent!` });
    } else {
        return res.status(400).json({ message: 'All fields are required!' });
    }
})

module.exports = { getAllMessagesOfChat, createMessage }
