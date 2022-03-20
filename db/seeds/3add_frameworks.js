/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex.schema.raw('ALTER SEQUENCE framework_id_seq restart 1');
  await knex('framework').insert([
    {
      "name": "Node.js",
      "language_id": 1,
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      "name": "Angular",
      "language_id": 1,
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
    },
    {
      "name": "React",
      "language_id": 1,
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      "name": "Vue",
      "language_id": 1,
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
    },
    {
      "name": "Express",
      "language_id": 1,
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    {
      "name": "Flask",
      "language_id": 2,
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
    },
    {
      "name": "Django",
      "language_id": 2,
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg"
    }
  ]);
};
