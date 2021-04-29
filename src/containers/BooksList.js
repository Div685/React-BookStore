import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBookAction } from '../actions/index';

function BooksList({ booksList, removeBookAction }) {
  const handleRemoveBook = (book) => {
    removeBookAction(book);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>title</th>
            <th>category</th>
            <th>Remove Book</th>
          </tr>
        </thead>
        <tbody>
          {booksList && booksList.length
            ? booksList.map((item) => (
              <Book
                key={item.id}
                book={item}
                handleRemoveBook={handleRemoveBook}
              />
            ))
            : 'No Books! '}
        </tbody>
      </table>
    </>
  );
}

const mapStateToProps = (state) => ({ booksList: state.booksList });

const mapDispatchToProps = (dispatch) => (
  {
    removeBookAction: (book) => {
      dispatch(removeBookAction(book));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

BooksList.propTypes = {
  booksList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  removeBookAction: PropTypes.func.isRequired,
};
