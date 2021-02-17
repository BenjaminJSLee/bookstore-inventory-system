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
const bcrypt = require('bcrypt');
const { authenticate } = require('./middleware/authenticate.js');

app.use(cors());
app.use(cookieSession({
  name: 'session',
  keys: ["lilduck"],
}));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// import routes and middleware below
app.use('/books', authenticate, require('./routes/books')(knex));
app.use('/bookstores', authenticate,
  require('./routes/bookstores')(knex),
  require('./routes/bookstore_books')(knex)
);

// root of api server
app.get("/", (req, res) => {
  res.json({ "hello": "world" });
});

// Login route
app.post("/login/:id", (req, res) => {
  knex('users').where({ id: req.params.id })
    .then((data) => {
      const user = data[0];
      if (user && !bcrypt.compareSync(user.password, req.body.password,)) {
        req.session.user = { id: user.id, username: user.username };

        return res.json({ id: user.id, username: user.username });
      }
      return res.status(401).json({ status: 401, msg: "Username and password mismatch"});
    })
    .catch((err) => {
      res.json(err);
    });
});

// Logout route
app.delete("/logout", (req, res) => {
  req.session = null;
  res.json({ status: 200, msg: "success" });
});

app.listen(PORT, () => {
  console.log(`'Bookstore Inventory System' listening on port ${PORT}`);
});
