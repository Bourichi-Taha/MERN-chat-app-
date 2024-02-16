const router = require('express').Router();
const chatController = require('../controllers/ChatController');
const verifyJWT = require('../middleware/verifyJWT');

router.use(verifyJWT).route('/groups')
    .get(chatController.getAllChatsGroups);
router.use(verifyJWT).route('/:id')
    .get(chatController.getSingleChat)
    .patch(chatController.leaveGroupChat)
router.use(verifyJWT).route('/')
    .post(chatController.createChat)
    .get(chatController.getAllChats)
// .patch(userController.updateUser)
// .delete(userController.deleteUser)



module.exports = router;