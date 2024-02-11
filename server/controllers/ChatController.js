const Chat = require('../models/Chat');
const asyncHandler = require('express-async-handler');


// @ desc Get all chats
// @route GET /chat
// @access Private
const getAllChats = asyncHandler(async (req, res) => {
    const user = req.user;
    const chats = await Chat.find({ members: user._id });

    if (!chats) return res.status(400).json({ message: 'NO chats found!' });

    return res.status(200).json(chats);
})

// @ desc create a chat
// @route POST /chats
// @access Public
const createChat = asyncHandler(async (req, res) => {
    const { name, isGroupChat, members, lastMessage, admin } = req.body;

    if (!isGroupChat) {
        //confirm inputs
        if (!members || members.length < 2) return res.status(400).json({ message: 'All fields are required!' });
        const duplicate = await Chat.findOne({ members:{$all : members}}).lean().exec();
        if (duplicate) return res.status(200).json(duplicate);
    }
    if (!name || !members || members.length < 2) return res.status(400).json({ message: 'All fields are required!' });
    //create and store chat
    const chat = await Chat.create({ name, isGroupChat, members, lastMessage, admin });
    if (chat) {
        return res.status(201).json({ message: `New chat ${name} created!` });
    } else {
        return res.status(400).json({ message: 'Invalid chat data received. Please try again!' });
    }
})

// @ desc update a chat
// @route PATCH /chats
// @access Private
const updateChat = asyncHandler(async (req, res) => {

})

// @ desc delete a chat
// @route DELETE /chats
// @access Private
const deleteChat = asyncHandler(async (req, res) => {

})

module.exports = { createChat, updateChat, deleteChat, getAllChats }