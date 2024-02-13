const router = require("express").Router();
const messageController = require("../controllers/MessageController");
const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT).route('/:id')
    .get(messageController.getAllMessagesOfChat)
router.use(verifyJWT).route('/')
    .post(messageController.createMessage)


module.exports = router;