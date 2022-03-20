/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTableIfNotExists('snippet', (table) => {
        table.increments('id');
        table.string('title');
        table.string('description');
        table.text('code');
        table.integer('user_id').references('user.id');
        table.integer('language_id');
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('snippet');
};
