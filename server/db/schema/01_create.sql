DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS bookstore_books CASCADE;
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS bookstores CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(64) NOT NULL,
  password VARCHAR(64) NOT NULL,
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  date_published DATE NOT NULL,
  publisher VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL DEFAULT 0 CHECK (price >= 0), -- price is in cents
  status VARCHAR(255) NOT NULL DEFAULT "out of stock",
  editor VARCHAR(255),
  genre VARCHAR(255),
  description TEXT
);

CREATE TABLE bookstores (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  manager VARCHAR(255) NOT NULL,
  date_opened DATE NOT NULL,
  location VARCHAR(255),
);

CREATE TABLE bookstore_books (
  id SERIAL PRIMARY KEY NOT NULL,
  bookstore_id INTEGER REFERENCES bookstores(id) ON DELETE CASCADE,
  book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
  stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0)
);
