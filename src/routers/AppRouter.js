import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import HomePage from '../components/HomePage';
import CreatePage from '../components/CreatePage';
import EditPage from '../components/EditPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path='/' component={LoginPage} exact />
      <PrivateRoute path='/dashboard' component={HomePage} />
      <PrivateRoute path='/create' component={CreatePage} />
      <PrivateRoute path='/edit/:id' component={EditPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
