import { SearchByFilters } from '../actions'

const searchByFilter = (state = SearchByFilters.TITLE, action) => {
    switch (action.type) {
      case 'SET_SEARCH_FILTER':
        return action.searchByFilter
      default:
        return state
    }
  }
  
  export default searchByFilter
  