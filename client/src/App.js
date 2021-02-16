import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Books from './components/Books';

const App = () => {
  const [state, setState] = useState({
    books: [],
    bookstores: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get('/api/books'),
      axios.get('/api/bookstores'),
      axios.get('/api/bookstores/books'),
    ])
      .then((res) => {
        const books = res[0].data;
        const bookstores = res[1].data;
        const bookstoreBooks = res[2].data;
        const booksHash = {};
        for (const book of bookstoreBooks) {
          const bookStock = { id: book.book_id, stock: book.stock }
          if (booksHash[book.bookstore_id]) {
            booksHash[`${book.bookstore_id}`].push(bookStock);
          } else {
            booksHash[`${book.bookstore_id}`] = [bookStock];
          }
        }
        setState({
          books,
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
      <Books 
        books={state.books}
      />
    </div>
  );
}

export default App;
