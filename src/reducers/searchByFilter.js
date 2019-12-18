const searchByFilter = (state = '', action) => {
    switch (action.type) {
      case 'SET_SEARCH_STRING':
        return action.searchByFilter
      default:
        return state
    }
  }
  
  export default searchByFilter
  