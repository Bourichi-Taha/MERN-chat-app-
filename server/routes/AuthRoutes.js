const router = require("express").Router();
const authController = require("../controllers/AuthController")
const loginLimiter = require('../middleware/loginLimiter');


router.route('/login')
    .post(loginLimiter, authController.login);

router.route('/refresh')
    .get(authController.refresh);

router.route('/logout')
    .post(authController.logOut);
module.exports = router;