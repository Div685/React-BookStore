import { useState } from 'react';
import { connect } from 'react-redux';
import { createBookAction } from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const handleChangeTitle = (event) => {
    setTitle(
      event.target.value,
    );
  };

  const handleChangeCategory = (event) => {
    setCategory(
      event.target.value,
    );
  };

  return (
    <form>
      <input type="text" name="title" value={title} onChange={handleChangeTitle} />

      <select name="category" id="category" value={category} onChange={handleChangeCategory}>
        {
        categories.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))
        }
      </select>

      <button type="submit">Submit</button>
      <p>
        hello:
        {title}
      </p>
    </form>
  );
};

export default connect(null, { createBookAction })(BooksForm);
