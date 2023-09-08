const User = require("../models/User");
const Crypto = require("crypto-js");
const JWT = require("jsonwebtoken");


//register
const register = async (req,res) => {
    try {
        const newUser = new User({
            username : req.body.username,
            password : Crypto.AES.encrypt(req.body.password,process.env.CRYPTO_KEY).toString(),
        });
        const result = await newUser.save();
        return res.status(201).json({message:"your account have been created successfully"});
    } catch (error) {
        return res.status(500).json(error);
    }
}

const login =  async (req,res) => {
    try {
        //getting user by username 
        const user = await User.findOne({username:req.body.username});
        //checking if user  exists
        if (user) {
            const originalPass = Crypto.AES.decrypt(user.password,process.env.CRYPTO_KEY).toString(Crypto.enc.Utf8);
            //checking if password is correct
            if (originalPass === req.body.password) {
                const jwt = JWT.sign(
                    {user:user._doc},
                    process.env.JSON_WEB_TOKEN_KEY,
                    {expiresIn:"1d"}
                );
                const {password, ...info} = user._doc;
                return res.status(200).json({...info,jwt});
            } else {
                return res.status(403).json({message:"password is incorrect"});
            }
        } else {
            return res.status(401).json({message:"email doesnt exist"});
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {login,register};