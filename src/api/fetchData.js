import authAxios from './request';

export const getBooks = async () => {
  const response = await authAxios().get('books')
    .then((response) => response.data).catch((error) => error);
  return response;
};

export const getCategories = async () => {
  const response = await authAxios().get('categories')
    .then((response) => response.data).catch((error) => error);
  return response;
};
