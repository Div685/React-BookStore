import { CHANGE_FILTER } from '../actions/actionType';

const filterReducerDefaultState = {
  book: {},
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return { ...state, book: action.filter };
    default:
      return state;
  }
};

export default filterReducer;
