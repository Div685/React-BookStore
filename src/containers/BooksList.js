import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import { filterBooks, getBooks } from '../api/fetchData';
import { removeBookAction } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import '../style/Book.css';

const BooksList = () => {
  const [bookList, setBookList] = useState([]);

  const booksList = useSelector((state) => state.booksList.books);

  const filterList = useSelector((state) => state.filter.book);

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    setBookList(booksList);
  }, [booksList]);

  useEffect(() => {
    setBookList(filterList);
  }, [filterList]);

  const handleRemoveBook = (book) => {
    removeBookAction(book);
  };

  const handleFilterChange = async (filter) => {
    if (filter === 'All') {
      await getBooks();
    } else {
      await filterBooks(filter);
    }
  };

  return (
    <>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <div className="book_details">
        {bookList && bookList.length
          ? bookList.map((item) => (
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
