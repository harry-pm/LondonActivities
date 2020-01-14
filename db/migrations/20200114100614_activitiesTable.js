
exports.up = function(knex) {
  return knex.schema.createTable('entries', function(t) {
      t.increments("id").unsigned().primary();
      t.string("activity").notNullable();
      t.string("description").notNullable();
      t.string("location").notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('entries');
};
