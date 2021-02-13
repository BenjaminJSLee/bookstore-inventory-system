
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bookstore_books').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookstore_books').insert([
        {
          bookstore_id: 1, 
          book_id: 1,
          stock: 0,
        },
        {
          bookstore_id: 2, 
          book_id: 2,
          stock: 4,
        },
        {
          bookstore_id: 1, 
          book_id: 2,
          stock: 1,
        },
      ]);
    });
};
