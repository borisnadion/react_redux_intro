import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { buildStore } from './redux/build_store';

const store = buildStore();

const app = (
  <Provider store={ store }>
    <App />
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);
