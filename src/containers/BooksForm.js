import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../style/BooksForm.css';
import { addBooks, getCategories } from '../api/fetchData';
import { getBookAction } from '../actions/index';

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    getCategories();
  }, []);

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

  const handleClickData = async (title, category) => {
    try {
      const response = await addBooks(title, category);
      if (response.status === 'Created') {
        setMessage('SuccessFully Created a Book');
        getBookAction(response.books);
      } else {
        setMessage(response.message);
      }
    } catch {
      setMessage('Sorry something Went Wrong!');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClickData(title, category);
  };

  return (
    <div className="form_section">
      {message}
      <h3>Add New Book</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input className="form_input" placeholder="Book title" type="text" name="title" value={title} onChange={handleChangeTitle} />

        <select className="form_select" name="category" id="category" onChange={handleChangeCategory}>
          {
        categories.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))
        }
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BooksForm;
