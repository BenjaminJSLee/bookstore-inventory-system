const express = require('express');
const router = express.Router();
const { verifyBook } = require('../helpers/verifyInput');

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex('books').then((books) => {
      res.json(books);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  });
  
  router.post("/", (req, res) => {
    const book = req.body;
    if (!verifyBook(book)) return res.status(406).json({});
    knex('books').insert(book)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  router.put("/:id", (req, res) => {
    const book = req.body;
    if (!verifyBook(book)) return res.status(406).json({});
    knex('books').where({ id: req.params.id }).update(book)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  router.delete("/:id", (req, res) => {
    knex('books').where({ id: req.params.id }).del()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  return router;

};
