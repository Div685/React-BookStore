import React, { useState } from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

function BooksForm() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  return (
    <form>
      <input type="text" name="title" />

      <select name="category" id="category">
        {
        categories.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))
        }
      </select>

      <button type="submit">Submit</button>

    </form>
  );
}

export default BooksForm;
