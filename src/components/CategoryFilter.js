import React from 'react';
import { categories } from '../actions/actionType';

function CategoryFilter() {
  return (
    <div className="selectBox">
      <select name="filterCategory" id="filterCat">
        <option value="All">All</option>
        {
        categories.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))
        }
      </select>
    </div>
  );
}

export default CategoryFilter;