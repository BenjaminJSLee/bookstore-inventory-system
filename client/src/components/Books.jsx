import React from 'react';
import './Books.css';

const formatCents = (price) => {
  const priceArr = price.toString().split('');
  while (priceArr.length < 3) priceArr.unshift("0");
  priceArr.splice(-2,0,'.');
  return priceArr.join('');
};

const formatDate = (date) => {
  const tmp = new Date(date);
  return tmp.toDateString().slice(4);
};

const Books = (props) => {

  const books = props.books.map((book) => {
    const price = formatCents(book.price);
    const date = formatDate(book.date_published);
    return (
      <div className={`book${book.status === "out of stock" ? " unavailable" : ""}`} key={book.id}>
        <header>
          <span>{book.title.toUpperCase()}</span>
          <span>{book.status.toUpperCase()}</span>
        </header>
        <div>
          <span>By:</span>
          <span>{book.author}</span>
        </div>
        <div>
          <span>Price:</span>
          <span>${price}</span>
        </div>
        { book.stock !== undefined && 
          (
            <div>
              <span>Local Stock:</span>
              <span>{book.stock}</span>
            </div>
          )
        }
        <div>
          <span>Total Stock:</span>
          <span>{book.total_stock}</span>
        </div>
        <footer>
          <span className="bold">Publisher: </span>
          <span>{book.publisher}</span>
          <span>{date}</span>
        </footer>
      </div>
    )
  });

  return (
    <div className="books">
      {books}
    </div>
  );
};

export default Books;