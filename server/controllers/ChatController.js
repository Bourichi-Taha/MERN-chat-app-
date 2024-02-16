const Chat = require('../models/Chat');
const Message = require('../models/Message');
const asyncHandler = require('express-async-handler');
const {format} =require('timeago.js');


// @ desc Get all chats
// @route GET /chat
// @access Private
const getAllChats = asyncHandler(async (req, res) => {
    const user = req.user;
    try {
        const chats = await Chat.find({ members: user._id }).populate({
            path: 'members',
            populate: {
                path: 'avatar'
            }
        }).lean().exec();

        if (!chats) return res.status(400).json({ message: 'NO chats found!' });
        const transformedRes = await Promise.all(chats.map(async (chat) => {
            const lastMessage = await Message.findOne({ chat: chat._id }).sort({ createdAt: -1 }).exec();
            if (lastMessage) {
                if (lastMessage?.type === 'text') {
                    return { ...chat, lastMessage: lastMessage.content, lastMessageCreatedAt: lastMessage.createdAt, lastMessageAgo:format(lastMessage.createdAt) }; // Add lastMessageAgo
                }
                return { ...chat, lastMessage: 'attachment', lastMessageCreatedAt: lastMessage.createdAt, lastMessageAgo: format(lastMessage.createdAt) }; // Add lastMessageAgo
            } else {
                return { ...chat, lastMessage: 'Start Chatting!', lastMessageCreatedAt: null, lastMessageAgo: null }; // Add lastMessageAgo
            }
        }));
        
        // Sort transformedRes by lastMessageCreatedAt field
        transformedRes.sort((a, b) => {
            if (a.lastMessageCreatedAt && b.lastMessageCreatedAt) {
                return new Date(b.lastMessageCreatedAt) - new Date(a.lastMessageCreatedAt);
            } else if (a.lastMessageCreatedAt) {
                return -1;
            } else if (b.lastMessageCreatedAt) {
                return 1;
            }
            return 0;
        });
        
        

        return res.status(200).json(transformedRes);
    } catch (error) {
        console.log(error)
    }
});
// @ desc Get all groups
// @route GET /chat/groups
// @access Private
const getAllChatsGroups = asyncHandler(async (req, res) => {
    const user = req.user;
    try {
        const chats = await Chat.find({ members: user._id, isGroupChat: true }).populate({
            path: 'members',
            populate: {
                path: 'avatar'
            }
        }).lean().exec();

        if (!chats) return res.status(400).json({ message: 'NO chats found!' });
        const transformedRes = await Promise.all(chats.map(async (chat) => {
            const lastMessage = await Message.findOne({ chat: chat._id }).sort({ createdAt: -1 }).exec();
            if (lastMessage) {
                if (lastMessage?.type === 'text') {
                    return { ...chat, lastMessage: lastMessage.content }
                }
                return { ...chat, lastMessage: 'attachement' }
            } else {
                return { ...chat, lastMessage: 'Start Chatting!' };
            }
        }))

        return res.status(200).json(transformedRes);
    } catch (error) {
        console.log(error)
    }
});
// @ desc Get single chats
// @route GET /chat/:id
// @access Private
const getSingleChat = asyncHandler(async (req, res) => {
    const user = req.user;
    const chatId = req.params.id;
    const chat = await Chat.findOne({ members: user._id, _id: chatId }).populate({
        path: 'members',
        populate: {
            path: 'avatar'
        }
    });

    if (!chat) return res.status(400).json({ message: 'NO chats found!' });

    return res.status(200).json(chat);
});

// @ desc create a chat
// @route POST /chats
// @access Public
const createChat = asyncHandler(async (req, res) => {
    const { name, isGroupChat, members, lastMessage, admin } = req.body;

    if (!isGroupChat) {
        //confirm inputs
        if (!members || members.length < 2) return res.status(400).json({ message: 'All fields are required!' });
        const duplicate = await Chat.findOne({ members: { $all: members, $size: members.length } }).lean().exec();
        if (duplicate) return res.status(200).json(duplicate);
    }
    else if (!name || !members || members.length < 2) return res.status(400).json({ message: 'All fields are required!' });
    //create and store chat
    const chat = await Chat.create({ name, isGroupChat, members, lastMessage, admin });
    if (chat) {
        return res.status(201).json({ message: `New chat ${name} created!` });
    } else {
        return res.status(400).json({ message: 'Invalid chat data received. Please try again!' });
    }
})

// @ desc leave group chat
// @route PATCH /chat/chatId
// @access Private
const leaveGroupChat = asyncHandler(async (req, res) => {
    try {
        const chat = Chat.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { members: req.user._id } },
            { new: true }
        ).lean().exec();
        if (chat) {
            return res.status(200).json({ message: 'left chat group successfully!' });
        } else {
            return res.status(404).json({ message: 'chat group not found.' });
        }
    } catch (error) {
        console.log(error)
    }
})

// @ desc delete a chat
// @route DELETE /chats
// @access Private
const deleteChat = asyncHandler(async (req, res) => {

})

module.exports = { createChat, leaveGroupChat, deleteChat, getAllChats, getSingleChat, getAllChatsGroups }