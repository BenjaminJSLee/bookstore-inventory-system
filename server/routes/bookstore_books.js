const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get("/:id/books", (req, res) => {
    knex('bookstore_books')
      .join('books', 'books.id', '=', 'bookstore_books.book_id')
      .where({ "bookstore_id":  req.params.id })
      .then((books) => {
        res.json(books);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  });
  
  router.post("/:id/books", (req, res) => {
    const book = req.body;
    console.log(book);
    knex('bookstore_books')
      .insert({ 
        "bookstore_id":  req.params.id,
        ...book,
      })
      .onConflict(["bookstore_id", "book_id"])
      .ignore()
      .then((books) => {
        res.json(books);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  });

  return router;

};
