import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createBrowserHistory } from 'history';
import { Layout } from './common/Frame/Layout';

//import {requireAuth}  from "./checkAuth";
import { store } from './store';

const history = createBrowserHistory();

export const AppRouter = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" name="Layout" component={Layout} />
        </Switch>
      </Router>
    </Provider>
  );
};
