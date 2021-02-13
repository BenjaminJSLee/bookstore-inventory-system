const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex('books').then((books) => {
      res.json(books);
    }).catch((err) => {
      res.json(err);
    });
  });
  
  router.post("/", (req, res) => {

  });

  router.put("/:id", (req, res) => {

  });

  router.delete("/:id", (req, res) => {

  });

  return router;

};
