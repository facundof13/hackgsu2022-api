const router = require('express').Router();
const LanguageController = require('../controllers/language-controller');
const languageController = new LanguageController();

router.route('/languages').get(languageController.getAllLanguages);
router.route('/languages/:id').get(languageController.getAllLanguageFrameworks);

module.exports = router;