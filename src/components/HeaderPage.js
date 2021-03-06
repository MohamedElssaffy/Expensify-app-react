import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogout } from '../actions/auth';

export const Header = (props) => (
  <div className='header'>
    <div className='container'>
      <div className='header__content'>
        <Link className='header__title' to='/dashboard'>
          <h1>Expensify</h1>
        </Link>

        <button className='btn btn--link' onClick={props.startLogout}>
          Log out
        </button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout() {
    return dispatch(startLogout());
  },
});

export default connect(undefined, mapDispatchToProps)(Header);
