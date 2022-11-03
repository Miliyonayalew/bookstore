import React, { useState } from 'react';
import Book from '../components/Book';
import AddBooks from '../components/AddBooks';

const Books = () => {
  const [books, setBooks] = useState([
    { title: 'The Hunger Games', author: 'Suzanne Collins' },
    { title: 'Dune', author: 'Frank Herbert' },
    { title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins' },
  ]);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <Book
            key={book.toString()}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      <AddBooks books={books} setBooks={setBooks} />
    </div>
  );
};

export default Books;
