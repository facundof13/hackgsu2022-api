const CommentService = require("../services/comment-service");

module.exports = class CommentController {
    constructor() {
        this.commentService = new CommentService();
    }

    getComments = async (req, res) => {
        try {
            res.json(await this.commentService.getComments(req.params.id));
        } catch (err) {
            console.error(err);
            res.status(400).send(err);
        }
    }

    postComment = async (req, res) => {
        try {
            if (req.user.id) {
                res.json(await this.commentService.postComment({ user_id: req.user.id, ...req.body }));
            } else {
                res.status(401).send({});
            }
        } catch (err) {
            console.error(err);
            res.status(400).send(err);
        }
    }

}