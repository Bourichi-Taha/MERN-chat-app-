const router = require('express').Router();
const userController = require('../controllers/UserController');
const verify = require('../utils/JwtVerify');

router.route('/')
.post(userController.createUser)
router.use(verify).route('/')
    .get(userController.getAllUsers)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)



module.exports = router;