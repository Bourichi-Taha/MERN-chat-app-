const Upload = require('../models/Upload');

async function getUpload(req, res, next) {
  let upload;
  try {
    upload = await Upload.findById(req.params.id);
    if (upload == null) {
      return res.status(404).json({ message: 'Upload not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.upload = upload;
  next();
}

module.exports = { getUpload };
