import {
  CHANGE_FILTER, ADD_BOOK, DELETE_BOOK, GET_CATEGORY, GET_BOOK,
} from './actionType';

export const addBookAction = (book = []) => ({
  type: ADD_BOOK,
  book,
});

export const removeBookAction = (book = []) => ({
  type: DELETE_BOOK,
  book,
});

export const filterBookAction = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});

export const getCategoriesAction = (categories = []) => ({
  type: GET_CATEGORY,
  categories,
});

export const getBookAction = (book = []) => ({
  type: GET_BOOK,
  book,
});
