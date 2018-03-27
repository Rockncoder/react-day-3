import {combineReducers } from 'redux';
import contact from './contactReducer';
import credit from './creditReducer';
import errors from './errorsReducer';
import query from './queryReducer';

export default combineReducers({
  contact, credit, errors, query,
})