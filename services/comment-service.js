const knex = require('../db/knex');

module.exports = class CommentService {
    constructor() { }

    async getComments(snippet_id) {
        try {
            return await knex('comment').select('user.username', 'comment.*')
                .where({ snippet_id })
                .join('user', 'user.id', 'comment.user_id')
                .orderBy('id', 'desc');
        } catch (err) {
            return [];
        }
    }

    async postComment(body) {
        try {
            await knex('comment').insert(body);

            return true;
        } catch (err) {
            return false;
        }
    }
}