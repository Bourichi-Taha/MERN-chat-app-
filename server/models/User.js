const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: {type:String,unique:true},
    password: String,
    active: {
        type : Boolean,
        default : true
    }
},
{timestamps: true}
);

module.exports = mongoose.model('User',User);