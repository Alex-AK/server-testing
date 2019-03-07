const db = require('../data/dbConfig');

module.exports = {
  add,
  remove,
  getAll,
  get
};

// get all
function getAll() {
  return db('users');
}

function get(id) {
  return db('users').where({ id });
}
// create

async function add(user) {
  const [id] = await db('users').insert(user);

  return db('users')
    .where({ id })
    .first();
}

// delete
function remove(id) {
  db('users')
    .where({ id })
    .delete();
}
