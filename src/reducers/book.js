import { ADD_BOOK, DELETE_BOOK, GET_BOOK } from '../actions/actionType';

const defaultBookReducer = {
  books: [],
};

const bookReducer = (state = defaultBookReducer, action) => {
  switch (action.type) {
    case GET_BOOK:
      return { ...state, books: action.book };
    case ADD_BOOK:
      return { ...state, books: action.book };
    case DELETE_BOOK:
      return state.filter((book) => book !== action.book);
    default:
      return state;
  }
};

export default bookReducer;
