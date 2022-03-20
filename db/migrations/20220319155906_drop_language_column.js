/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasColumn('language', 'language').then((hasColumn) => {
    if (hasColumn) {
      return knex.schema.alterTable('language', table => {
        table.dropColumn('language');
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
