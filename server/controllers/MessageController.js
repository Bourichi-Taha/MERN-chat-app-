const Message = require("../models/Message");
const asyncHandler = require("express-async-handler");

// @ desc Get all messages
// @route GET /messages
// @access Private
const getAllMessages = asyncHandler(async (req,res) => {
    const userId = req.user.UserInfo._id;
    // stoped at creating message controller
    return res.json(req.user);
});

