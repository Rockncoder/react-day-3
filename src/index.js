import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import contactReducer from './reducers/contactReducer';
import creditReducer from './reducers/creditReducer';
import vehiclesReducer from './reducers/vehiclesReducer';

import './index.css';
import rootSaga from './sagas/rootSaga';
import initialState from './initialState.json';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    contact: contactReducer,
    credit: creditReducer,
    vehicles: vehiclesReducer
  }),
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root'));
