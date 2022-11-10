import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const progress = require('../assests/progress.png');

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();

  const handleRemoveBook = () => dispatch(removeBook(id));
  return (
    <li key={id} className="book">
      <div className="book">
        <div className="book-content">
          <div className="book-info">
            <h4>{category}</h4>
            <h2>{title}</h2>
            <h6>{author}</h6>
            <div className="action-buttons">
              <button type="button" className="comment">Comments</button>
              <div className="vertical-divider" />
              <button
                type="button"
                onClick={handleRemoveBook}
              >
                Remove
              </button>
              <div className="vertical-divider" />
              <button type="button" className="edit">Edit</button>
            </div>
          </div>
          <div className="book-progress">
            <div className="progress-bar">
              <img src={progress} alt="progress" />
            </div>
            <div className="progress-info">
              <p className="percent-complete">64%</p>
              <p className="completed">Completed</p>
            </div>
            <div className="progress-divider" />
            <div className="chapter-container">
              <p>Current Chapter</p>
              <h4>Chapter 17</h4>
              <button type="submit">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
