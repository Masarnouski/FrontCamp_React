export { getFilmDetails } from './film-details-action';
export {
  getFilms,
  clearTextInputValue,
  getSearchType,
  getSortType,
  getTextInputValue,
} from './films-list.action';


export const SearchByFilters = {
  TITLE: 'TITLE',
  GENRE: 'GENRE'
}

export const SortByFilters = {
  SHOW_ALL: 'RELEASE_DATE',
  SHOW_COMPLETED: 'RATING'
}

export const ToggleButtonTypes = {
  SEARCH_BY: 'Search By',
  SORT_BY: 'Sort By'

}
