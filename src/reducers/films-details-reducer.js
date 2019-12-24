
const initialfilmDetailsReducer = {};

export const filmDetailsReducer = function (state = initialfilmDetailsReducer, action) {
  console.log(action.filmWithDetails)
  switch (action.type) {
    case 'ADD_FILM_WITH_DETAILS':
     
      return { ...action.filmWithDetails };
  }
  return state;
};
