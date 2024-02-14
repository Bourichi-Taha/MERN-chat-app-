const router = require('express').Router();
const userController = require('../controllers/UserController');
const verifyJWT = require('../middleware/verifyJWT');

router.route('/')
    .post(userController.createUser);
router.use(verifyJWT).route('/:id')
    .get(userController.getSingleUser)
router.use(verifyJWT).route('/')
    .get(userController.getAllUsers)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);
router.use(verifyJWT).route('/request/:id')
    .patch(userController.sendUserRequest);
router.use(verifyJWT).route('/accept/:id')
    .patch(userController.acceptUserRequest);
router.use(verifyJWT).route('/refuse/:id')
    .patch(userController.refuseUserRequest);
router.use(verifyJWT).route('/cancel/:id')
    .patch(userController.cancelUserRequest);
router.use(verifyJWT).route('/unfriend/:id')
    .patch(userController.unfriendUser);


module.exports = router;