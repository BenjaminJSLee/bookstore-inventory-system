
const updateInventory = (knex) => {
  return () => {
    console.log('Updating inventory...');
    knex('books').whereIn('id',
      knex('bookstore_books')
        .rightJoin('books', 'books.id', '=', 'bookstore_books.book_id')
        .select('books.id as id')
        .groupBy('books.id', 'books.status')
        .having(knex.raw('SUM(stock) = 0 OR SUM(stock) IS NULL'))
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
