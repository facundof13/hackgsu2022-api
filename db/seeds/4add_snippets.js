/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex.schema.raw('ALTER SEQUENCE snippet_id_seq restart 1');
  await knex('snippet').insert([
    {
      "title": "Test",
      "description": "This is a test description.",
      "code": "test() {\n  console.log('hello');\n}",
      "user_id": 1,
      "language_id": 1,
      "framework_id": null
    },
    {
      "title": "Loop over array of objects",
      "description": "Loop over an array of objects in JavaScript.",
      "code": "let myObject = { one: 1, two: 2, three: 3 };\nObject.keys(myObject).forEach((key, value) => {\n  //...do something\n  console.log(key, value);\n});",
      "user_id": 1,
      "language_id": 1,
      "framework_id": null
    }
  ])

}
