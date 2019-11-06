exports.seed = function(knex, Promise) {
  return knex("users")
    .truncate()
    .then(() =>
      knex("users").insert([
        { username: "chao" },
        { username: "mag" },
        { username: "senf" }
      ])
    );
};
