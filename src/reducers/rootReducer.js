import {combineReducers } from 'redux';
import contact from './contactReducer';
import credit from './creditReducer';
import vehicles from './vehiclesReducer';
import errors from './errorsReducer'

export default combineReducers({
  contact, credit, vehicles, errors,
})