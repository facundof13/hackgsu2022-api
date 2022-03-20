/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('favorite').insert([
    { user_id: 1, snippet_id: 1 },
  ]);
};
