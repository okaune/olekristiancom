import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import {createLogger} from 'redux-logger';
import { createBrowserHistory } from 'history';

// Reducers
import cvReducer from './cv/reducers';

export const history = createBrowserHistory();
const logger = createLogger();
const enhancers = [];

const middleware = [
  thunk,
  logger,
  routerMiddleware(history)
];

const rootReducer = combineReducers({
  cv: cvReducer
});

const devToolsExtension = (process.env.NODE_ENV === 'development') &&
  window.devToolsExtension;

if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  composedEnhancers
);

export default store;
