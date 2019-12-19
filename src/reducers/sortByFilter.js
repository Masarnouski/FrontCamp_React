const sortByFilter = (state = '', action) => {
    switch (action.type) {
      case 'SET_SORT_FILTER':
        return action.sortByFilter
      default:
        return state
    }
  }
  
  export default sortByFilter
  