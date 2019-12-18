export const setSearchString = searchString => ({
    type: 'SET_SEARCH_STRING',
    searchString
  })
  

export const SearchByFilters = {
    SHOW_ALL: 'TITLE',
    SHOW_COMPLETED: 'GENRE'
  }
  
  
export const SordByFilters = {
  SHOW_ALL: 'RELEASE_DATE',
  SHOW_COMPLETED: 'RATING'
}
