import {CREATE_CONTACT_FAILURE} from '../types'

export default (state={}, action) => {
  switch(action.type){
    case CREATE_CONTACT_FAILURE:
      console.info('CREATE_CONTACT_FAILURE');
      return state;
    default:
      return state;
  }
};