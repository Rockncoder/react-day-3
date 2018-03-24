import {CREATE_CONTACT_REQUEST, CREATE_VEHICLES_REQUEST} from '../types';
import {createContactRequestSaga} from './contactSaga';
import {createVehiclesRequestSaga} from './vehiclesSaga';
import {takeLatest} from 'redux-saga/effects';

export default function* rootSaga() {
  yield takeLatest(CREATE_CONTACT_REQUEST, createContactRequestSaga);
  yield takeLatest(CREATE_VEHICLES_REQUEST, createVehiclesRequestSaga)
}