const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');


// @ desc Get all users
// @route GET /user
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password').lean();
    if (!users) return res.status(400).json({ message: 'NO users found!' });
    const loggedUser = req.user;
    const finalUsers = users.filter((user) => user._id.toString() !== loggedUser._id);
    return res.json(finalUsers);
})
// @ desc Get single user
// @route GET /user/:id
// @access Private
const getSingleUser = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id).select('username _id').lean();
    if (!user) return res.status(400).json({ message: 'NO user found!' });
    return res.json(user);
})

// @ desc create a user
// @route POST /users
// @access Public
const createUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    //confirm inputs
    if (!username || !password) return res.status(400).json({ message: 'All fields are required!' });

    //chack duplicate
    const duplicate = await User.findOne({ username }).lean().exec();

    if (duplicate) return res.status(409).json({ message: 'User already exist!' });

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const userObject = { username, password: hashedPassword };

    //create and store user
    const user = await User.create(userObject);

    if (user) {
        return res.status(201).json({ message: `New user ${username} created!` });
    } else {
        return res.status(400).json({ message: 'Invalid user data received. Please try again!' });
    }


})

// @ desc update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {
    const { username, password, avatarId } = req.body;

    //confirm inputs
    if (!username || !password) return res.status(400).json({ message: 'All fields are required!' });

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    let userObject;
    if (avatarId) {
        userObject = { username, password: hashedPassword, avatarId };
    } else {
        userObject = { username, password: hashedPassword };
    }

    //create and store user
    const user = await User.create(userObject);

    if (user) {
        return res.status(201).json({ message: `User ${username} updated!` });
    } else {
        return res.status(400).json({ message: 'Invalid user data received. Please try again!' });
    }
})
// @ desc send a user request 
// @route PATCH /user/request/:id
// @access Private
const sendUserRequest = asyncHandler(async (req, res) => {
    const friendId = req.params.id;
    const userId = req.user._id;

    try {
        const updatedFriend = await User.findOneAndUpdate(
            { _id: friendId },
            { $addToSet: { requests: userId } },
            { new: true }
        ).lean().exec();

        if (updatedFriend) {
            return res.status(200).json({ message: 'Friend request sent successfully!' });
        } else {
            return res.status(404).json({ message: 'Friend not found.' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error.' });
    }

});
// @ desc accept a user request
// @route PATCH /user/accept/:id
// @access Private
const acceptUserRequest = asyncHandler(async (req, res) => {
    const friendId = req.params.id;
    const userId = req.user._id;

    try {
        const updatedFriend = await User.findOneAndUpdate(
            { _id: friendId },
            { $addToSet: { friends: userId },$pull: { requests: userId } },
            { new: true }
        ).lean().exec();
        const updatedSelf = await User.findOneAndUpdate(
            { _id: userId },
            { $addToSet: { friends: friendId },$pull: { requests: friendId } },
            { new: true }
        ).lean().exec();

        if (updatedFriend && updatedSelf) {
            return res.status(200).json({ message: 'Friend request accepted successfully!' });
        } else {
            return res.status(404).json({ message: 'Friend not found.' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error.' });
    }

});
// @ desc refuse a user request
// @route PATCH /user/refuse/:id
// @access Private
const refuseUserRequest = asyncHandler(async (req, res) => {
    const friendId = req.params.id;
    const userId = req.user._id;

    try {
        const updatedFriend = await User.findOneAndUpdate(
            { _id: userId },
            { $pull: { requests: friendId } },
            { new: true }
        ).lean().exec();

        if (updatedFriend) {
            return res.status(200).json({ message: 'Friend request refused successfully!' });
        } else {
            return res.status(404).json({ message: 'Friend not found.' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error.' });
    }

});
// @ desc cancel a user request
// @route PATCH /user/refuse/:id
// @access Private
const cancelUserRequest = asyncHandler(async (req, res) => {
    const friendId = req.params.id;
    const userId = req.user._id;

    try {
        const updatedFriend = await User.findOneAndUpdate(
            { _id: friendId },
            { $pull: { requests: userId } },
            { new: true }
        ).lean().exec();

        if (updatedFriend) {
            return res.status(200).json({ message: 'Friend request canceled successfully!' });
        } else {
            return res.status(404).json({ message: 'Friend not found.' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error.' });
    }

});
// @ desc unfriend a user 
// @route PATCH /user/unfriend/:id
// @access Private
const unfriendUser = asyncHandler(async (req, res) => {
    const friendId = req.params.id;
    const userId = req.user._id;

    try {
        const updatedFriend = await User.findOneAndUpdate(
            { _id: friendId },
            { $pull: { friends: userId } },
            { new: true }
        ).lean().exec();
        const updatedSelf = await User.findOneAndUpdate(
            { _id: userId },
            { $pull: { friends: friendId } },
            { new: true }
        ).lean().exec();

        if (updatedFriend && updatedSelf) {
            return res.status(200).json({ message: 'Friend removed successfully!' });
        } else {
            return res.status(404).json({ message: 'Friend not found.' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error.' });
    }

});

// @ desc delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {

})

module.exports = { createUser, updateUser, deleteUser, getSingleUser, getAllUsers, acceptUserRequest, sendUserRequest, refuseUserRequest, cancelUserRequest, unfriendUser }