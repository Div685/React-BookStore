import React from 'react';
import PropTypes from 'prop-types';
import PersonIcon from '@material-ui/icons/Person';
import '../style/CategoryFilter.css';
import { useSelector } from 'react-redux';

function CategoryFilter({ handleFilterChange }) {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <div className="nav">
      <div className="nav_logo">
        <span>Bookstore CMS</span>
      </div>
      <div className="nav_middle">
        <p>Books</p>
        <select name="filter" id="filter" onChange={(e) => { handleFilterChange(e.target.value); }}>
          <option value="All">All</option>
          {
          categories.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))
          }
        </select>
      </div>
      <div className="nav_end">
        <PersonIcon />
      </div>
    </div>
  );
}

export default CategoryFilter;

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
