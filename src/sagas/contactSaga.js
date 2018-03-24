import axios from 'axios';
import {call, put} from 'redux-saga/effects';
import {createContactFailure, createContactSuccess} from '../actions/user';

const url = 'https://tekadept-vehicles.herokuapp.com/contact';

export function* createContactSaga(action) {
  try {
    const contact = yield call(axios.post, url, action.contact);
    console.info(JSON.stringify(contact));
    yield put(createContactSuccess(contact));
  } catch (err) {
    console.info(err);
    yield put(createContactFailure, err);
  }
}