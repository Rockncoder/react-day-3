import {
  CREATE_VEHICLES_REQUEST,
  CREATE_VEHICLES_SUCCESS,
  CREATE_VEHICLES_FAILURE,
  NEXT_PAGE,
  PREVIOUS_PAGE,
} from '../types';

export const createVehiclesRequest = query => ({
  type: CREATE_VEHICLES_REQUEST,
  query
});

export const createVehiclesSuccess = vehicles => ({
  type: CREATE_VEHICLES_SUCCESS,
  vehicles
});

export const createVehiclesFailure = error => ({
  type: CREATE_VEHICLES_FAILURE,
  error
});

export const nextPage = () => ({
  type: NEXT_PAGE
});

export const previousPage = () => ({
  type: PREVIOUS_PAGE
});