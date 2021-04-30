import React from 'react';
import PropTypes from 'prop-types';
import '../style/Book.css';

function Book({ book, handleRemoveBook }) {
  const {
    // id,
    title,
    category,
  } = book;

  return (
    <div className="div_books">
      <div className="book_left">
        <div>
          <p>{category}</p>
          <p>{title}</p>
          <p>Suzanne Collins</p>
        </div>
        <div>
          <p>Comment</p>
          <p>Remove</p>
          <p>Edit</p>
        </div>
      </div>
      <div className="book_middle">
        <div className="oval-2" />
        <div>
          <h4>80%</h4>
          <span>Completed</span>
        </div>
      </div>
      <div className="book_right">
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button type="button" onClick={() => handleRemoveBook(book)}>Remove Book</button>
      </div>
    </div>
    // <tr>
    //   <td>{id}</td>
    //   <td>{title}</td>
    //   <td>{category}</td>
    //   <td><button type="button" onClick={() => handleRemoveBook(book)}>Remove Book</button></td>
    // </tr>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
