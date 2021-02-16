import React from 'react';
import Books from './Books';
import './Bookstore.css';

const Bookstore = (props) => {
  return (
    <div className="bookstore">
      <header>
        <div>{props.bookstore.name}</div>
        <div>{props.bookstore.location}</div>
      </header>
      <Books 
        books={props.books}
      />
    </div>
  );
};

export default Bookstore;