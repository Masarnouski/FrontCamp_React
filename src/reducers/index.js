import { combineReducers } from 'redux'
import searchString from './searchString'
import searchByFilter from './searchByFilter'
import sortByFilter from './sortByFilter'

export default combineReducers({
    searchString,
    searchByFilter,
    sortByFilter
})
