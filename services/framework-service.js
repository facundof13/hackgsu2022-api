const knex = require('../db/knex');

module.exports = class FrameworkService {
    constructor() { }

    async getFrameworks() {
        return await knex('framework');
    }
}