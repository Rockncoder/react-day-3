import {CREATE_CONTACT_FAILURE, CREATE_CONTACT_REQUEST} from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_CONTACT_REQUEST:
      console.info('CREATE_CONTACT_REQUEST');
      return {
        ...state,
        error: {}
      };
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