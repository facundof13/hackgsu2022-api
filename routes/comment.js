const router = require('express').Router();
const CommentController = require('../controllers/comment-controller');
const commentController = new CommentController();

router.route('/comments/:id').get(commentController.getComments);
router.route('/comments').post(commentController.postComment);

module.exports = router;