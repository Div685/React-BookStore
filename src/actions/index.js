import { CHANGE_FILTER, ADD_BOOK, DELETE_BOOK } from './actionType';

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
