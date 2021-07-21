import { combineReducers } from 'redux';
import booksList from './book';
import categories from './category';
import filter from './filter';

const rootReducer = combineReducers({
  booksList, categories, filter,
});

export default rootReducer;
