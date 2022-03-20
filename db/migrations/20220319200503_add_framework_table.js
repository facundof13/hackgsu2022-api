/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('framework', (table) => {
        table.increments('id');
        table.string('name');
        table.integer('language_id').references('language.id');
        table.text('icon');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.hasTable('framework').then((has) => {
        if (has) {
            return knex.schema.dropTable('framework');
        }
    });
};
