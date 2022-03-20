const knex = require('../db/knex');

module.exports = class SnippetService {
    constructor() { }

    async getPopularSnippets() {
        try {
            return await this.getSnippets();
        } catch (err) {
            console.error(err);
            return [];
        }
    }

    async getSnippets(language_id = null) {
        try {
            const query = knex('snippet')
                .select('snippet.id as id', 'snippet.*', 'user.username', 'language.key')
                .select(knex.raw('coalesce(framework.icon, language.icon) as icon'))
                .select(knex.raw('coalesce((select count(*) from favorite where favorite.snippet_id = snippet.id group by favorite.snippet_id)::Integer, 0) as favorites'))
                .join('language', 'language.id', 'snippet.language_id')
                .leftJoin('framework', 'framework.id', 'snippet.framework_id')
                .leftJoin('user', 'snippet.user_id', 'user.id')
                .orderBy('favorites', 'desc');

            if (language_id) {
                query.where({ 'snippet.language_id': language_id })
            }

            const snippets = await query;

            return snippets;
        } catch (err) {
            console.error(err);
            return [];
        }
    }

    async getSnippet(id) {
        try {
            const snippet = await knex('snippet')
                .where({ id });

            return snippet;
        } catch (err) {
            return [];
        }
    }

    async postSnippet(data) {
        try {
            await knex('snippet')
                .insert(data)
                .returning('id');

            return true;
        } catch (err) {
            return false;
        }
    }
}