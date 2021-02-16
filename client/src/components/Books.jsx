import React from 'react';
import './Books.css';

const Books = (props) => {

  const books = props.books.map((book) => {
    const priceArr = book.price.toString().split('');
    while (priceArr.length < 3) priceArr.unshift("0");
    priceArr.splice(-2,0,'.');
    const price = priceArr.join('');
    console.log(price);
    return (
      <tr key={book.id}>
        <td>{book.title}</td>
        <td>{book.status}</td>
        <td>{book.author}</td>
        <td>{(new Date(book.date_published)).toDateString()}</td>
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