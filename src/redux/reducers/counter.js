import { handleActions } from 'redux-actions';

export const counter = handleActions({
  'increment': (state, action) => (state + action.value),
  'decrement': (state, action) => (state - action.value)
}, 0);
