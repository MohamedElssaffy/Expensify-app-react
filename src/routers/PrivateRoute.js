import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import Header from '../components/HeaderPage';

export const PrivateRoute = ({ isAuth, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      isAuth ? (
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
        <Redirect to='/' />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuth: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
