import React from 'react';
import { connect } from 'react-redux';

import { startLogin } from '../actions/auth';

export const LoginPage = (props) => (
  <div>
    <button onClick={props.startLogin}>Login With Google</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin() {
    return dispatch(startLogin());
  },
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
