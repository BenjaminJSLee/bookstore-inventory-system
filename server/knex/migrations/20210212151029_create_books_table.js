
exports.up = function(knex) {
  return knex.schema.createTable('books', function(table) {
    table.increments();
    table.string('title').notNullable();
    table.string('author').notNullable();
    table.date('date_published').notNullable();
    table.string('publisher').notNullable();
    table.integer('price').notNullable().defaultTo(0);
    table.string('status').notNullable().defaultTo("out of stock");
    table.string('editor');
    table.string('genre');
    table.string('description');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('books');
};
