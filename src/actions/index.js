export const setSearchString = searchString => ({
  type: 'SET_SEARCH_STRING',
  searchString
})

export const getFilms = (films) => ({
  type: 'ADD_FILMS',
  films
});


export const getTextInputValue = (textInputValue) => ({
  type: 'GET_TEXT_INPUT_VALUE',
  textInputValue,
});

export const clearTextInputValue = () => ({
  type: 'CLEAR_TEXT_INPUT_VALUE',
  textInputValue: '',
});

// search by tab button
export const getSearchType = (searchType) => ({
  type: 'GET_SEARCH_TYPE',
  searchType,
});

// sort by tab button
export const getSortType = (sortType) => ({
  type: 'GET_SORT_TYPE',
  sortType,
});

export const SearchByFilters = {
  TITLE: 'TITLE',
  GENRE: 'GENRE'
}


export const SortByFilters = {
  SHOW_ALL: 'RELEASE_DATE',
  SHOW_COMPLETED: 'RATING'
}
