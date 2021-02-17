# bookstore-inventory-system
This project consists of the back-end for a bookstore management system. Features include:
- Endpoints for basic CRUD operations involving associations between books and bookstores.
- Additional endpoints for CRUD operations involving books and bookstores.
- Periodic updates to check if any books are completely out of stock, and modify their status if they are.
- Authenticated network calls for CRUD operations on each table.  

The endpoints for this API server can be found below.

## Dependencies
- bcrypt: ^5.0.0
- body-parser: ^1.19.0
- cookie-session: ^1.4.0
- cors: ^2.8.5
- dotenv: ^8.2.0
- express: ^4.17.1
- knex: ^0.21.17
- morgan: ^1.10.0
- pg: ^8.5.1

## Getting started
If you'd like to locally run a copy of this project, please follow the instructions below:

  1. Clone the repository locally.  
  
  2. Install Node.js and Knex.js globally if you have not already. Knex.js can be installed using node 
  by typing the following command into the terminal: `npm i knex -g`  
  
  3. To connect a database, create a new `.env` file using the `.env.example` file as a template. You can fill out all DB fields or just the DB_URL field.
  The database must use postgreSQL. Make sure to include the CLIENT_URL inside the .env file if you're using the associated client-app.
  
  4. Using the terminal or command line, type `knex migrate:latest` to create the database tables, and `knex seed:run` to seed the database. 
  You can type `knex migrate:rollback` to rollback the latest migration.  
  
  5. After the database is set up, you can type `npm start` in the root of the project to run the server.

  6. (Optional) If you'd like to run the client as well, make sure the REACT_APP_SERVER_URL is set in the client .env file, and the CLIENT_URL is set in the server .env file.

## Endpoints
  
I would recommend using Postman to test the routes. The client-side provides an acceptable interface to view the data, but cannot currently edit any data.  
  
### Main Endpoints  
These are the basic endpoints required to have the API be customisable.

***GET*** `/api/bookstore/books`  
    Get every single bookstore's books (returning ids only).  
    
***GET*** `/api/bookstore/:id/books`  
    Get the books of a singular bookstore.  
    
***POST*** `/api/bookstore/:id/books`  
    Add a book to a bookstore (using ids).  
    
***PUT*** `/api/bookstore/:bookstore_id/books/:book_id`  
    Edit the stock of a book in a bookstore.  
    
***DELETE*** `/api/bookstore/:bookstore_id/books/:book_id`  
    Delete a book from a bookstore.  
    
***POST*** `/login/:id`  
    Login to an account with ":id". Requires a password in the form body (req.body.password).
    
***DELETE*** `/logout`  
    Logout from your currently logged in account.

### Additional Endpoints  
These endpoints are not required, but created anyway incase of use for non-seeded editing.

***GET*** `/api/books`
    Get all books.  
    
***POST*** `/api/books`
    Create a new book.  
    
***PUT*** `/api/books/:id`
    Edit an existing book.  
    
***DELETE*** `/api/books/:id`
    Delete an existing book.  

***GET*** `/api/bookstores`
    Get all bookstores. 
    
***POST*** `/api/bookstores`
    Create a new bookstore.  
    
***PUT*** `/api/bookstores/:id`
    Edit an existing bookstore. 
    
***DELETE*** `/api/bookstores/:id`
    Delete an existing bookstore.  
