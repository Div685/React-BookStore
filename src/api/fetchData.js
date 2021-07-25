import {
  addBookAction, filterBookAction, getBookAction, getCategoriesAction,
} from '../actions';
import store from '../store';
import authAxios from './request';

export const getBooks = async () => {
  const response = await authAxios().get('books')
    .then((response) => store.dispatch(addBookAction(response.data))).catch((error) => error);
  return response;
};

export const getCategories = async () => {
  const response = await authAxios().get('categories')
    .then((response) => store.dispatch(getCategoriesAction(response.data))).catch((error) => error);
  return response;
};

export const addBooks = async (bName, cId) => {
  const response = await authAxios().post('books', {
    title: bName,
    author: 'TVD',
    category_id: cId,
  })
    .then((response) => store.dispatch(getBookAction(response.data))).catch((error) => error);
  return response;
};

export const filterBooks = async (cId) => {
  const response = await authAxios().get(`categories/filter/${cId}`)
    .then((response) => store.dispatch(filterBookAction(response.data))).catch((error) => error);
  return response;
};
