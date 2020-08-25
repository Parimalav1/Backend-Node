exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments("id");
    tbl.string("username", 128).notNullable().unique().index();
    tbl.string("password", 255).notNullable();
    tbl.boolean("volunteer").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
