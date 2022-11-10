import api from '../../api/api';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book);
    case GET_BOOKS:
      return action.books;
    default:
      return state;
  }
};

// Action creators
export const addBook = (book) => async (dispatch) => {
  api.addNewBook(book);
  dispatch({
    type: ADD_BOOK,
    book,
  });
};

export const removeBook = (book) => async (dispatch) => {
  api.removeBook(book);
  dispatch({
    type: REMOVE_BOOK,
    book,
  });
};

export const getBooks = () => async (dispatch) => {
  const books = await api.getBooks();
  dispatch({
    type: GET_BOOKS,
    books,
  });
};

export default booksReducer;
