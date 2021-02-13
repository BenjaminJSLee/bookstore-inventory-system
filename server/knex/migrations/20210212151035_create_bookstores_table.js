
exports.up = function(knex) {
  return knex.schema.createTable('bookstores', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('manager').notNullable();
    table.date('date_opened').notNullable();
    table.string('location');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('bookstores');
};
