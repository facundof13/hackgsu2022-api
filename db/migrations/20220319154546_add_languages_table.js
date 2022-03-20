/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('language', (table) => {
    table.increments('id');
    table.string('name');
    table.string('language');
    table.boolean('is_framework');
    table.integer('language_id').references('language.id');
    table.text('icon');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
