const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');


// @ desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req,res) => {
    const users = await User.find().select('-password').lean();
    
    if(!users) return res.status(400).json({message: 'NO users found!'});

    return res.json(users);
})

// @ desc create a user
// @route POST /users
// @access Public
const createUser = asyncHandler(async (req,res) => {
    const {username,password} = req.body;

    //confirm inputs
    if(!username || !password) return res.status(400).json({message: 'All fields are required!'});

    //chack duplicate
    const duplicate = await User.findOne({username}).lean().exec();

    if(duplicate) return res.status(409).json({message: 'User already exist!'});

    //hash password
    const hashedPassword = await bcrypt.hash(password,10);

    const userObject = {username,password:hashedPassword};

    //create and store user
    const user = await User.create(userObject);

    if(user) {
        return res.status(201).json({message: `New user ${username} created!`});
    }else{
        return res.status(400).json({message: 'Invalid user data received. Please try again!'});
    }


})

// @ desc update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req,res) => {
    
})

// @ desc delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req,res) => {

})

module.exports = {createUser,updateUser,deleteUser,getAllUsers}