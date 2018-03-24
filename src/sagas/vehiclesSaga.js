import axios from 'axios';
import {call, put} from 'redux-saga/effects';
import {createVehiclesFailure, createVehiclesSuccess} from '../actions/vehicles';


export function* createVehiclesRequestSaga(action) {
  const {page, limit} = action.query;
  const url = `https://tekadept-vehicles.herokuapp.com/vehicle?page=${page}&limit=${limit}`;
  try {
    const response = yield call(axios.get, url);
    // console.info(JSON.stringify(response));
    yield put(createVehiclesSuccess(response.data));
  } catch (err) {
    console.info(err);
    yield put(createVehiclesFailure(err.response));
  }
}