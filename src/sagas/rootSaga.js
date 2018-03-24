import {CREATE_CONTACT_REQUEST} from '../types';
import {createContactSaga} from './contactSaga';
import {takeLatest} from 'redux-saga/effects';

export default function* rootSaga() {
  yield takeLatest(CREATE_CONTACT_REQUEST, createContactSaga)
}