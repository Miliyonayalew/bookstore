import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddBooks = (props) => {
  const { setBooks, books } = props;

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
    };
    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h2>Add new book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

AddBooks.propTypes = {
  setBooks: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default AddBooks;
