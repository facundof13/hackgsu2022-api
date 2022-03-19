const router = require('express').Router();
const UsersController = require('../controllers/user-controller');
const userController = new UsersController();

router.route('/register').post(userController.register);
router.route('/login').post(userController.login);

module.exports = router;