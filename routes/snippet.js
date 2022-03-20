const router = require('express').Router();

const SnippetsController = require('../controllers/snippets-controller');
const snippetsController = new SnippetsController();

router.route('/snippets').get(snippetsController.getPopularSnippets);
router.route('/snippets/:id').get(snippetsController.getSnippets);
router.route('/snippet/:id').get(snippetsController.getSnippet);
router.route('/snippets').post(snippetsController.postSnippet);

module.exports = router;