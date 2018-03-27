import {CREATE_CONTACT_REQUEST, CREATE_VEHICLES_REQUEST, NEXT_PAGE, PREVIOUS_PAGE} from '../types';
import {takeLatest} from 'redux-saga/effects';

import {createContactRequestSaga} from './contactSaga';
import {createVehiclesNextPageSaga, createVehiclesRequestSaga, createVehiclesPreviousPageSaga} from './querySaga';

export default function* rootSaga() {
  yield takeLatest(CREATE_CONTACT_REQUEST, createContactRequestSaga);
  yield takeLatest(CREATE_VEHICLES_REQUEST, createVehiclesRequestSaga);
  yield takeLatest(NEXT_PAGE, createVehiclesNextPageSaga);
  yield takeLatest(PREVIOUS_PAGE, createVehiclesPreviousPageSaga)

}