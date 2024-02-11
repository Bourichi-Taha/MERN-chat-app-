const Upload = require('../models/Upload');
const asyncHandler = require('express-async-handler');


// @ desc create an upload
// @route POST /uploads
// @access Public

const createUpload = asyncHandler(async (req, res) => {
    const { filename, path: filePath } = req.file;
    const normalizedPath = filePath.replace(/\\/g, '/');//originally stored with \ instead of /
    const newUpload = new Upload({
        filename,
        path: normalizedPath
    });

    try {
        const upload = await newUpload.save();
        res.status(201).json(upload);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @ desc Get all uploads
// @route GET /upload
// @access Private

const getAllUploads = asyncHandler(
    async (req, res) => {
        try {
            const uploads = await Upload.find();
            res.json(uploads);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
);

// @ desc Get a single upload
// @route GET /upload/:id
// @access Public
const getSingleUpload = asyncHandler(
    async (req, res) => {
        res.json(res.upload);
    }
);

// @ desc update a upload
// @route PATCH /uploads
// @access Private


const updateUpload = asyncHandler(
    async (req, res) => {
        if (req.body.filename != null) {
            res.upload.filename = req.body.filename;
        }

        try {
            const updatedUpload = await res.upload.save();
            res.json(updatedUpload);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
);


// @ desc delete a user
// @route DELETE /users
// @access Private

const deleteUpload = asyncHandler(
    async (req, res) => {
        try {
            await res.upload.remove();
            res.json({ message: 'Upload deleted' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
);


module.exports = {
    createUpload,
    getAllUploads,
    getSingleUpload,
    updateUpload,
    deleteUpload
};




