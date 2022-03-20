const router = require('express').Router();
const FrameworkController = require('../controllers/framework-controller');
const frameworkController = new FrameworkController();

router.route('/frameworks').get(frameworkController.getFrameworks);


module.exports = router;