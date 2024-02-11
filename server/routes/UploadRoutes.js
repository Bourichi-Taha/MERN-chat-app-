// routes/uploads.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const uploadMiddleware = require('../middleware/uploadHandler');
const uploadController = require('../controllers/UploadController');

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Upload a file
router.post('/', upload.single('file'), uploadController.createUpload)

// Retrieve all uploads
.get('/', uploadController.getAllUploads)

// Retrieve a single upload
.get('/:id', uploadMiddleware.getUpload, uploadController.getSingleUpload)

// Update an upload
.patch('/:id', uploadMiddleware.getUpload, uploadController.updateUpload)

// Delete an upload
.delete('/:id', uploadMiddleware.getUpload, uploadController.deleteUpload);

module.exports = router;