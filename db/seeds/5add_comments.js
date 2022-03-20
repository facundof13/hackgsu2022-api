/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('comment').insert([
    { text: 'I like this, this was useful.', user_id: 1, snippet_id: 1 },
    { text: 'Thanks for sharing this.', user_id: 1, snippet_id: 2 },
  ]);
};
