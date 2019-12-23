import { combineReducers } from 'redux'
import { textInputReducer } from './text-input-reducer'
import { searchByReducer } from './search-by-reducer'
import { sortByReducer } from './sort-by-reducer'
import { filmListReducer } from './film-list-reducer'


export default combineReducers({
    textInputValue:textInputReducer,
    searchBy:searchByReducer,
    sortBy:sortByReducer,
    films: filmListReducer
})
