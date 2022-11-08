import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBooks from '../components/AddBooks';

const Books = () => {
  const books = useSelector((state) => state.books);

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
