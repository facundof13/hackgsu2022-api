/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex.schema.raw('ALTER SEQUENCE user_id_seq restart 1');
  await knex('comment').del();
  await knex('favorite').del();
  await knex('snippet').del();
  await knex('user').del();
  await knex('framework').del();
  await knex('language').del();
  await knex('user').insert([
    { username: 'Facundo', password: '$2b$12$8ZXGCj05wTDEOsv5ZTB2AuG.DOseB2SMiDJF7.aHhAmWkU1mUIbZu' },
  ]);
};
