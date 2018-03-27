import axios from 'axios';
import {call, put, select} from 'redux-saga/effects';
import {createVehiclesFailure, createVehiclesSuccess} from '../actions/vehicles';

const URL = 'https://tekadept-vehicles.herokuapp.com/vehicle?page=';

export function* createVehiclesRequestSaga() {
  const query = yield select((state) => state.query);
  const {page, limit} = query;
  const url = `${URL}${page}&limit=${limit}`;
  try {
    const response = yield call(axios.get, url);
    yield put(createVehiclesSuccess(response.data));
  } catch (err) {
    console.info(err);
    yield put(createVehiclesFailure(err.response));
  }
}

export function* createVehiclesNextPageSaga() {
  // select - pulls information from the redux store aka the state
  const query = yield select((state) => state.query);
  const {page, limit} = query;
  const url = `${URL}${page}&limit=${limit}`;
  try {
    const response = yield call(axios.get, url);
    yield put(createVehiclesSuccess(response.data));
  } catch (err) {
    console.info(err);
    yield put(createVehiclesFailure(err.response));
  }
}


export function* createVehiclesPreviousPageSaga() {
  // select - pulls information from the redux store
  const query = yield select((state) => state.query);
  const {page, limit} = query;
  const url = `${URL}${page}&limit=${limit}`;
  try {
    const response = yield call(axios.get, url);
    yield put(createVehiclesSuccess(response.data));
  } catch (err) {
    console.info(err);
    yield put(createVehiclesFailure(err.response));
  }
}