import React from 'react';
import ReactDOM from 'react-dom';
import { appContainer as AppContainer} from './containers/app-container';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { store } from './store'


ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
