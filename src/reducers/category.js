import { GET_CATEGORY } from '../actions/actionType';

const defaultCategoryState = {
  categories: [],
};

const categoryReducer = (state = defaultCategoryState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return { ...state, categories: action.categories };
    default:
      return state;
  }
};

export default categoryReducer;
