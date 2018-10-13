import React from 'react';
import {Provider } from 'react-redux';
import {HashRouter} from 'react-router-dom';

import App from './app';

const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <App state={store.getState()}/>
    </HashRouter>
  </Provider>
);

export default Root;



// store.getState().entities.users[store.getState().session.id]
