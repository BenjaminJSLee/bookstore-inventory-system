const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get("/books", (req, res) => {

  });
  
  router.post("/books", (req, res) => {

  });

  router.put("/books/:id", (req, res) => {

  });

  router.delete("/books/:id", (req, res) => {

  });

  return router;

};
