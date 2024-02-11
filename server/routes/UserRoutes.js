const router = require('express').Router();
const userController = require('../controllers/UserController');
const verifyJWT = require('../middleware/verifyJWT');

router.route('/')
.post(userController.createUser)
router.use(verifyJWT).route('/')
    .get(userController.getAllUsers)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)



module.exports = router;