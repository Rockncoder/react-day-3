import axios from 'axios';
import {call, put} from 'redux-saga/effects';
import {createContactSuccess} from '../actions/user';

const url = 'https://tekadept-vehicles.herokuapp.com/contact';

export function* createContactSaga(action) {
  const contact = yield call(axios.post, url, action.contact);
  console.info(JSON.stringify(contact));
  yield put(createContactSuccess(contact));
}