const router = require('express').Router();
const userController = require('../controllers/UserController');

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)



module.exports = router;