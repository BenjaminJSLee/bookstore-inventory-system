// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const express    = require("express");
const cookieSession = require('cookie-session');
const bodyParser = require("body-parser");
const app        = express();
const morgan     = require('morgan');
const cors       = require("cors");
const knex = require('./knex/knex.js');

app.use(cors());
app.use(cookieSession({
  name: 'session',
  keys: ["lilduck"],
}));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(authenticate);

// import routes and middleware below
app.use(require('./routes/books')(knex));

// root of api server
app.get("/", (req, res) => {
  res.json({ "hello": "world" });
});

app.listen(PORT, () => {
  console.log(`'Bookstore Inventory System' listening on port ${PORT}`);
});
