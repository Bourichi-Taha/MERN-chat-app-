const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  path: { type: String, required: true },
},
{
    timestamps: true
});

module.exports = mongoose.model('Upload', uploadSchema);
