const sortByReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_SORT_FILTER':
        return action.sortType
      default:
        return state
    }
  }
  
  export default sortByReducer
  