export const getBooks = async () => {
  const url = 'https://bookstore-api-rails.herokuapp.com/books';
  const request = await fetch(url);
  const data = await request.json();
  return data;
};

export const getCategories = async () => {
  const url = 'https://bookstore-api-rails.herokuapp.com/categories';
  const request = await fetch(url);
  const data = await request.json();
  return data;
};
