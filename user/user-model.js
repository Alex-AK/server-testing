const db = require('../data/dbConfig');

module.exports = {
  add,
  remove,
  getAll
};

// get all
function getAll() {
  return db('users');
}

function get(id) {
  return db('users').where({ id });
}
// create

function add(user) {
  return db('users')
    .insert(user)
    .then(id => get(id));
}

// delete
function remove() {
  return null;
}
