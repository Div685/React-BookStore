import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  books: [
    {
      id: Math.random(),
      title: 'The Hunger Games',
      category: 'Action',
    },
    {
      id: Math.random(),
      title: 'jungle book',
      category: 'Kids',
    },
    {
      id: Math.random(),
      title: 'second world war',
      category: 'History',
    },
  ],
};

const store = createStore(rootReducer, initialState);

export default store;
