import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { getStore } from '@stepform/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { load } from 'redux-localstorage-simple';
import { worker } from './mocks/browser';

import Home from './app/home';
import Search from './app/search';
import Details from './app/details';

worker.stop();

worker.start().then();

const store: Store<any, any> = getStore(load());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/items/:id">
            <Details />
          </Route>
          <Route path="/items">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
