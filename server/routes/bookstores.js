const express = require('express');
const router = express.Router();
const { verifyBookstore } = require('../helpers/verifyInput');

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex('bookstores').then((bookstores) => {
      res.json(bookstores);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  });
  
  router.post("/", (req, res) => {
    const bookstore = req.body;
    if (!verifyBookstore(bookstore)) return res.status(406).json({});
    knex('bookstores').insert(bookstore)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  router.put("/:id", (req, res) => {
    const bookstore = req.body;
    if (!verifyBookstore(bookstore)) return res.status(406).json({});
    knex('bookstores').where({ id: req.params.id }).update(bookstore)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  router.delete("/:id", (req, res) => {
    knex('bookstores').where({ id: req.params.id }).del()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  return router;

};
