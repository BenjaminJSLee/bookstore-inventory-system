import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [state, setState] = useState({
    books: [],
    bookstores: [],
  });

  useEffect(() => {
    Promise.all(
      axios.get('/api/books'),
      axios.get('/api/bookstores'),
      axios.get('/api/bookstores/books'),
    ).then((data) => {
        const [books, bookstores, bookstoreBooks] = data;
        const booksHash = {};
        for (const book of bookstoreBooks) {
          if (booksHash[book.bookstore_id]) {
            booksHash[book.bookstore_id].push(book.book_id);
          } else {
            booksHash[book.bookstore_id] = [book.book_id];
          }
        }
        setState({
          books,
          bookstores: bookstores.map((store) => {
            return {
              ...store,
              books: booksHash[store.id],
            };
          })
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="app">
    </div>
  );
}

export default App;
