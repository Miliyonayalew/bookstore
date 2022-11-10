import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
}, composeWithDevTools(applyMiddleware(thunk)));

export default store;
