export const setSearchString = searchString => ({
    type: 'SET_SEARCH_STRING',
    searchString
  })

  export const setSearchFilter = searchFilter => ({
    type: 'SET_SEARCH_FILTER',
    searchFilter
  })
  
  export const setSortFilter = sortFilter => ({
    type: 'SET_SORT_FILTER',
    sortFilter
  })

  

export const SearchByFilters = {
    TITLE: 'TITLE',
    GENRE: 'GENRE'
  }
  
  
export const SortByFilters = {
  SHOW_ALL: 'RELEASE_DATE',
  SHOW_COMPLETED: 'RATING'
}
