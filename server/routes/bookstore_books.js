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
    const { stock, book_id } = req.body;
    knex('bookstore_books')
      .insert({ 
        "bookstore_id":  req.params.id,
        book_id,
        stock,
      })
      .onConflict(["bookstore_id", "book_id"])
      .ignore()
      .then((book) => {
        res.json(book);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  });
  
  router.put("/:bookstore_id/books/:book_id", (req, res) => {
    const { stock } = req.body;
    knex('bookstore_books')
      .where({
        "bookstore_id":  req.params.bookstore_id,
        "book_id":  req.params.book_id,
      })
      .update({ 
        stock,
      })
      .then((book) => {
        res.json(book);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  });

  router.delete("/:bookstore_id/books/:book_id", (req, res) => {
    knex('bookstore_books')
      .where({
        "bookstore_id":  req.params.bookstore_id,
        "book_id":  req.params.book_id,
      })
      .del()
      .then((book) => {
        res.json(book);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  });

  return router;

};
