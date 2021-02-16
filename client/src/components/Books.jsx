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
    console.log(price);
    return (
      <tr key={book.id}>
        <td>{book.title}</td>
        <td>{book.status}</td>
        <td>{book.author}</td>
        <td>{date}</td>
        <td>{book.publisher}</td>
        <td>${price}</td>
      </tr>
    )
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Author</th>
            <th>Date Published</th>
            <th>Publisher</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {books}
        </tbody>
      </table>
    </div>
  );
};

export default Books;