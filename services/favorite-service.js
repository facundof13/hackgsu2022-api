const knex = require('../db/knex');

module.exports = class FavoriteService {
    constructor() { }

    async getFavorite(snippet_id) {
        try {
            const count = +(await knex('favorite')
                .where({ snippet_id })
                .first()
                .count())
                .count;

            return count;
        } catch (err) {
            return false;
        }
    }

    async postFavorite(user_id, snippet_id) {
        try {
            const is_favorite = await knex('favorite')
                .where({ user_id, snippet_id })
                .first();

            if (is_favorite) {
                await knex('favorite')
                    .where({ user_id, snippet_id })
                    .del();
            } else {
                await knex('favorite')
                    .insert({ user_id, snippet_id });
            }

            return true;
        } catch (err) {
            return false;
        }
    }

    async getUserFavorite(user_id, snippet_id) {
        try {
            return (await knex('favorite')
                .where({ user_id, snippet_id })
                .first()) ? true : false;
        } catch (err) {
            return false;
        }
    }
}