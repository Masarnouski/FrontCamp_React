export const getFilms = (films) => ({
  type: 'ADD_FILMS',
  films,
});

export const getTextInputValue = (textInputValue) => ({
  type: 'GET_TEXT_INPUT_VALUE',
  textInputValue,
});

export const clearTextInputValue = () => ({
  type: 'CLEAR_TEXT_INPUT_VALUE',
  textInputValue: '',
});

export const getSearchType = (searchType) => ({
  type: 'GET_SEARCH_TYPE',
  searchType,
});

export const getSortType = (sortType) => ({
  type: 'GET_SORT_TYPE',
  sortType,
});
