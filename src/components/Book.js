import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td><button type="button">Remove</button></td>
    </tr>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
