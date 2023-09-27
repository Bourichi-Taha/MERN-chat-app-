const router = require("express").Router();
const messageController = require("../controllers/MessageController");

router.route('/')
    .get()
    .post()
    .patch()
    .delete()

module.exports = router;