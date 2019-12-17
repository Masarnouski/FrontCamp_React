
const searchFilter = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_FILTER':
      console.log(action.filter)
      return action.filter
    default:
      return state
  }
}

export default searchFilter
