import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import { getBooks } from '../api/fetchData';
import { removeBookAction, filterBookAction } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import '../style/Book.css';

const BooksList = () => {
  const booksList = useSelector((state) => state.booksList.books);

  useEffect(() => {
    getBooks();
  }, []);

  const handleRemoveBook = (book) => {
    removeBookAction(book);
  };

  const handleFilterChange = (filter) => {
    filterBookAction(filter);
  };

  return (
    <>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <div className="book_details">
        {booksList && booksList.length
          ? booksList.map((item) => (
            <Book
              key={item.id}
              book={item}
              handleRemoveBook={handleRemoveBook}
            />
          ))
          : (<div className="noBook_error">No Books! </div>)}
      </div>
    </>
  );
};

export default BooksList;
