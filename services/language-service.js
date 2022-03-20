const knex = require('../db/knex');

module.exports = class LanguageService {
    constructor() { }

    async getAllLanguages() {
        try {
            const languages = await knex('language');
            return languages;
        } catch (err) {
            console.error(err);
            return [];
        }
    }

    async getAllLanguageFrameworks(language_id) {
        try {
            const frameworks = knex('language').where({ language_id });

            return await frameworks;
        } catch (err) {
            console.error(err);
            return [];
        }
    }
}