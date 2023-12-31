const User = require("../models/User");
const JWT = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const asyncHandler =require('express-async-handler');

// @desc Login
// @route POST /auth
// @access Public
const login = asyncHandler(async (req,res) => {
    const {username,password} = req.body;

    if (!username || !password) {
        return res.status(400).json({message:'All fields are required!'});
    }

    const foundUser = await User.findOne({username}).exec();

    if (!foundUser || !foundUser.active) {
        return res.status(401).json({message:'Unauthorized!'});
    }

    const match = await bcrypt.compare(password,foundUser.password);

    if (!match) {
        return res.status(401).json({message:'Unauthorized!'});
    }

    const accessToken = JWT.sign(
        {
            "UserInfo": {
                "username": foundUser.username,
                "_id": foundUser._id
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '10s'}
    );

    const refreshToken = JWT.sign(
        {
            "UserInfo": {
                "username": foundUser.username,
                "_id": foundUser._id
            }
        },
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn: '1d'}
    );

    // creating secure cookie with refresh token

    res.cookie('jwt',refreshToken, {
        httpOnly: true,//accessible only by web server
        secure:true,//https
        sameSite: 'none',//cross site cookie
        maxAge: 7*24*60*60*1000//set to match refresh token life 1Day
    });

    return res.status(200).json({accessToken});
});

// @desc Refresh
// @route GET /auth/refresh
// @access Public
const refresh = async (req,res) => {
    const cookie = req.cookies

    if (!cookie?.jwt) {
        return res.status(401).json({message : 'Unauthorized!1'});
    }

    const refreshToken = cookie.jwt;

    JWT.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        asyncHandler(async (err,decoded) => {
            if(err) return res.status(403).json({message: 'Forbidden!'});
            console.log(decoded)
            const foundUser = await User.findOne({username: decoded.UserInfo.username}).exec();

            if(!foundUser) return res.status(401).json({message: 'Unauthorized!2'});

            const accessToken = JWT.sign(
                {
                    "UserInfo": {
                        "username": foundUser.username,
                        "_id": foundUser._id
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: '10s'}
            );

            return res.status(200).json({accessToken});
        })

    )
};

// @desc LogOut
// @route POST /auth/logout
// @access Public
const logOut = async (req,res) => {
    const cookie = req.cookies;

    if(!cookie?.jwt) return res.sendStatus(204)//no content

    res.clearCookie('jwt',{httpOnly:true,sameSite: 'None', secure:true});

    return res.status(200).json({messsage: 'Cookie cleared!'});
};

module.exports = {login,refresh,logOut};