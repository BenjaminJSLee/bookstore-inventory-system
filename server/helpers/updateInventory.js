
const updateInventory = (knex) => {
  return () => {
    console.log('Updating inventory...');
    knex('books').whereIn('id',
      knex('bookstore_books')
        .join('books', 'books.id', '=', 'bookstore_books.book_id')
        .select('books.id as id')
        .groupBy('books.id', 'books.status')
        .having(knex.raw('SUM(stock) = 0'))
      )
      .update({ status: 'out of stock' }, ['id', 'title', 'status'])
      .then((books) => {
        console.log('Updated items:\n', books);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

module.exports = {
  updateInventory,
};
