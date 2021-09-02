import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogout } from '../actions/auth';

export const Header = (props) => (
  <div>
    <h1>Expensify</h1>
    <NavLink to='/dashboard' activeClassName='is-active'>
      Home
    </NavLink>
    <NavLink to='/create' activeClassName='is-active'>
      Create
    </NavLink>
    <button onClick={props.startLogout}>Log out</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout() {
    return dispatch(startLogout());
  },
});

export default connect(undefined, mapDispatchToProps)(Header);
