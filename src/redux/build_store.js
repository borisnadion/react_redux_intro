import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';

import { counter } from './reducers/counter';
import { color } from './reducers/color';

export const buildStore = () => {
  const rootReducer = combineReducers({ counter, color });

  const store = createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(createLogger()), window.devToolsExtension())
  );

  return store;
};

