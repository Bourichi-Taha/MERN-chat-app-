const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: {type:String,unique:true},
    password: String,

},
{timestamps: true}
);

module.exports = mongoose.model('User',User);