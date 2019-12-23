import { sortBy } from '../services';

const initialSortByReducer = sortBy.RELEASE_DATE;

export const sortByReducer = function (state = initialSortByReducer, action) {
  switch (action.type) {
    case 'GET_SORT_TYPE':
      console.log(action.sortType)
      return action.sortType;
  }
  return state;
};
