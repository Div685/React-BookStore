import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBookAction } from '../actions/index';
import { categories } from '../actions/actionType';

const BooksForm = (props) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');
  const id = Math.random();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id,
      title,
      category,
    };
    props.createBookAction(book);
    setTitle('');
    setCategory('Action');
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

      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createBookAction: (book) => {
    dispatch(createBookAction(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);

BooksForm.propTypes = {
  createBookAction: PropTypes.func.isRequired,
};
