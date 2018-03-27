import {CREATE_VEHICLES_SUCCESS, NEXT_PAGE, PREVIOUS_PAGE} from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_VEHICLES_SUCCESS:
      console.info(action);
      return {
        ...state,
        vehicles: action.vehicles,
      };
    case PREVIOUS_PAGE:
      if(state.page === 0){
        return state;
      }
      return {
        ...state,
        page: state.page - 1
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1
      };
    default:
      return state;
  }
};