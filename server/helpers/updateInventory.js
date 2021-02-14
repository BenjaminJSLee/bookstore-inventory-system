
const updateInventory = (knex) => {
  return () => {
    console.log('Updating...');
    knex('books').whereIn('id',
      knex('bookstore_books')
        .join('books', 'books.id', '=', 'bookstore_books.book_id')
        .select('books.id as id')
        .groupBy('books.id', 'books.status')
        .having(knex.raw('SUM(stock) = 0'))
      )
      .update({ status: 'testing' })
      .then((books) => {
        console.log(books);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

module.exports = {
  updateInventory,
};
