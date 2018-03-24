import {CREATE_CONTACT_FAILURE, CREATE_CONTACT_SUCCESS} from '../types'

export default (state={}, action) => {
  switch(action.type){
    case CREATE_CONTACT_SUCCESS:
      console.info(action.contact);
      return {...state, ...action.contact};
    case CREATE_CONTACT_FAILURE:
      console.info(JSON.stringify(action.error));
      return {
        ...state,
        error: {
          flag: true,
          message: action.error.data
        }
      };
    default:
      return state;
  }
};