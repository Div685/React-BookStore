import { CREATE_BOOK, REMOVE_BOOK } from './actionType';

export const createBookAction = (book) => ({
  type: CREATE_BOOK,
  book,
});

export const removeBookAction = (book) => ({
  type: REMOVE_BOOK,
  book,
});
