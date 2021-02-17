import React from 'react';
import Bookstore from './Bookstore';

const Bookstores = (props) => {

  const bookstores = props.bookstores.map((store) => {
    const books = store.books.map((book) => {
      const bookInfo = props.books.find((bookInfo) => {
        return bookInfo.id === book.id;
      });
      return {
        ...book,
        ...bookInfo,
      }
    });
    return (
      <Bookstore
        key={store.id}
        bookstore={store}
        books={books} 
      />
    );
  });

  return (
    <div className="bookstores">
      {bookstores}
    </div>
  );
};

export default Bookstores;