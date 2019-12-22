import { SearchByFilters } from '../actions'

const searchByReducer = (state = SearchByFilters.TITLE, action) => {
    switch (action.type) {
      case 'SET_SEARCH_FILTER':
        return action.searchType
      default:
        return state
    }
  }
  
  export default searchByReducer
  