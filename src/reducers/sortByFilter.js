const sortByFilter = (state = '', action) => {
    switch (action.type) {
      case 'SET_SEARCH_STRING':
        return action.sortByFilter
      default:
        return state
    }
  }
  
  export default sortByFilter
  