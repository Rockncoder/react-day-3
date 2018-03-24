import {CREATE_CONTACT_FAILURE, CREATE_CONTACT_REQUEST} from '../types';
import {createContactRequestSaga, createContactFailureSaga} from './contactSaga';
import {takeLatest} from 'redux-saga/effects';

export default function* rootSaga() {
  yield takeLatest(CREATE_CONTACT_REQUEST, createContactRequestSaga);
  // yield takeLatest(CREATE_CONTACT_FAILURE, createContactFailureSaga)
}