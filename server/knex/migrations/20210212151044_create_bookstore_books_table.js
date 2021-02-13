
exports.up = function(knex) {
  return knex.schema.createTable('bookstore_books', function(table) {
    table.increments();
    table.integer('bookstore_id').references('id').inTable('bookstores');
    table.integer('book_id').references('id').inTable('books');
    table.integer('stock').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('bookstore_books');
};
