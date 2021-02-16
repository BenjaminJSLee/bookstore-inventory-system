const express = require('express');
const router = express.Router();


module.exports = (knex) => {
  
  const updateStatus = (book) => {
    if (book.stock !== 0) {
      return knex('books')
        .where({ id: book.book_id, status: "out of stock" })
        .update({ status: "available" })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  
  // Get all books from all bookstores
  router.get("/books", (req, res) => {
    knex('bookstore_books')
      .then((bookstore_books) => {
        res.json(bookstore_books);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  // Get all books at a specific bookstore
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
  
  // Add book to bookstore
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
      .then((data) => {
        const book = { stock, book_id };
        updateStatus(book);
        return res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  
  // Update book stock
  router.put("/:bookstore_id/books/:book_id", (req, res) => {
    const { stock } = req.body;
    knex('bookstore_books')
      .where({
        "bookstore_id":  req.params.bookstore_id,
        "book_id":  req.params.book_id,
      })
      .update({ 
        stock,
      }, ['*'])
      .then((data) => {
        const book = data[0];
        updateStatus(book);
        return res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  // Remove a book from a bookstore
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
