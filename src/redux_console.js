import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';


const counter = (state = 0, action) => {
  switch (action.type) {
    case 'dec': {
      return state - 1;
    }
    case 'inc': {
      return state + 1;
    }
    default:
      return state;
  }
};

const string = (state = "", action) => {
  switch (action.type) {
    case 'backspace':
      if (state.length) {
        return state.substr(0, state.length - 1);
      } else {
        return state;
      }
    case 'type':
      return state + action.letters;
    default:
      return state;
  }
};

const buildStore = () => {
  const rootReducer = combineReducers({ counter, string });

  const store = createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(createLogger()), window.devToolsExtension())
  );

  return store;
};


export const go = () => {
  const store = buildStore();
  store.subscribe(() => console.log("dispatched"));

  store.dispatch({ type: "type", letters: 'some text' });
  store.dispatch({ type: "backspace" });

  store.dispatch({ type: "inc" });
  store.dispatch({ type: "inc" });
  store.dispatch({ type: "dev" });

  console.log(store.getState());
};
