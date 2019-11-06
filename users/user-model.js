const db = require("../data/db-config.js");

module.exports = {
  find,
  findById
};

function find() {
  return db("users");
  // return db.select('*').from('users')
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
