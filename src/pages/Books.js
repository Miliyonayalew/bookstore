import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from '../components/Book';
import AddBooks from '../components/AddBooks';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <Book
            id={book.id}
            key={book.id}
            book={book}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      <AddBooks />
    </div>
  );
};

export default Books;
