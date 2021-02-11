INSERT INTO users (username, password)
VALUES ("admin", "admin");

INSERT INTO books (title, author, date_published, publisher, price, status)
VALUES 
  ("The Da Vinci Code", "Dan Brown", "2003-04-01", "Doubleday", 2500, "available"),
  ("The Lost Symbol", "Dan Brown", "2009-09-15", "Doubleday", 3000, "available"),
  ("It", "Stephen King", "1986-09-15", "Viking", 1500);

INSERT INTO bookstores (name, manager, date_opened, location)
VALUES 
  ("", "Jane Doe", '2005-12-25', "1234 Fake St, Vancouver, BC, Canada"),
  ("", "John Deer", '2010-10-31', "4321 Unknown Rd, Toronto, Ontario, Canada");

INSERT INTO bookstore_books (bookstore_id, book_id, stock)
VALUES 
  (1, 1, 0),
  (2, 2, 4),
  (1, 2, 1);
