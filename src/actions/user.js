import {
  CREATE_CONTACT_REQUEST,
  CREATE_CONTACT_SUCCESS, CREATE_CONTACT_FAILURE
} from '../types';

export const createContactRequest = contact => ({
    type: CREATE_CONTACT_REQUEST,
    contact
  })
;

export const createContactSuccess = contact => ({
  type: CREATE_CONTACT_SUCCESS,
  contact
});

export const createContactFailure = error => ({
  type: CREATE_CONTACT_FAILURE,
  error
});

