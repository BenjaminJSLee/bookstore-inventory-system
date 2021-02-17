import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Bookstores from './components/Bookstores';
import Books from './components/Books';

const BOOKS = "BOOKS";
const BOOKSTORES = "BOOKSTORES";

const App = () => {
  const [state, setState] = useState({
    books: [],
    bookstores: [],
  });
  const [view, setView] = useState(BOOKS);

  useEffect(() => {
    axios.post('/login/1', { password: 'admin' })
      .then(() => {
        return Promise.all([
          axios.get('/api/books'),
          axios.get('/api/bookstores'),
          axios.get('/api/bookstores/books'),
        ]);
      })
      .then((res) => {
        const books = res[0].data;
        const bookstores = res[1].data;
        const bookstoreBooks = res[2].data;
        const booksHash = {};
        const booksStockHash = {};
        for (const book of bookstoreBooks) {
          const bookStock = { id: book.book_id, stock: book.stock }
          if (booksHash[book.bookstore_id]) {
            booksHash[`${book.bookstore_id}`].push(bookStock);
          } else {
            booksHash[`${book.bookstore_id}`] = [bookStock];
          }
          if (booksStockHash[`${book.book_id}`] !== undefined) {
            booksStockHash[`${book.book_id}`] += book.stock;
          } else {
            booksStockHash[`${book.book_id}`] = book.stock;
          }
        }
        setState({
          books: books.map((book) => {
            return {
              ...book,
              total_stock: booksStockHash[`${book.id}`] || 0,
            };
          }),
          bookstores: bookstores.map((store) => {
            return {
              ...store,
              books: booksHash[`${store.id}`],
            };
          })
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="app">
      <main className="content">
        <nav className="tab-bar">
          <button className={`tab${ view === BOOKS ? " selected" : ""}`}
            onClick={() => setView(BOOKS)}
          >BOOKS</button>
          <button className={`tab${ view === BOOKSTORES ? " selected" : ""}`}
            onClick={() => setView(BOOKSTORES)}
          >BOOKSTORES</button>
        </nav>
        <div className="container">
          { view === BOOKSTORES &&
            <Bookstores
              bookstores={state.bookstores}
              books={state.books}
            />
          }
          { view === BOOKS &&
            <Books 
              books={state.books}
            />
          }
        </div>
      </main>
    </div>
  );
}

export default App;
