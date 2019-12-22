  
  const initialfilmListReducer = [];
  
  export const filmListReducer = function (state = initialfilmListReducer, action) {
    switch (action.type) {
      case 'ADD_FILMS':
        return [...action.films];
    }
    return state;
  };
  