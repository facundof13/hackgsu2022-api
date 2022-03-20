/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTableIfNotExists('comment', (table) => {
        table.increments('id');
        table.text('text');
        table.integer('user_id').references('user.id');
        table.integer('snippet_id').references('snippet.id');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('comment');
};
