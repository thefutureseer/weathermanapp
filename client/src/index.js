import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/App';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDom.render(
  <Provider store={createStoreWithMiddleware(reducers)} >
    <App />
  </Provider>, document.querySelector(".container")
);
