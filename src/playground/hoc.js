// HOC => Higher Order Component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>this is a details: {props.info}</p>
  </div>
);

const adminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is admin info</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = adminWarning(Info);

const requiredAuth = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuth ? <WrappedComponent {...props} /> : <p>Please Log in</p>}
    </div>
  );
};

const AuthInfo = requiredAuth(Info);

ReactDOM.render(
  <AuthInfo isAuth={true} info='This is auth info' />,
  document.getElementById('app')
);

// ReactDOM.render(
//   <AdminInfo isAdmin={false} info='Please dont touch' />,
//   document.getElementById('app')
// );
