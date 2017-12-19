import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import * as authService from '../services/authService';

import Auth, { PrivateRoute } from '../components/Auth';


import colors from '../colors';

const CONTAINER_STYLE = {
  marginTop: 60,
  minHeight: '80vh',
}

const COPYRIGHT_STYLE = {
  color: colors.GREY_DARK,
  margin: 0,
  padding: 20,
  fontSize: 13,
  marginTop: 50,

  textAlign: 'center',
}

class Layout extends Component {

  state = {
    redirect: false,
  }

  constructor(props) {
    super(props);

    authService.handle403Errors(() => {
      authService.logout();
      this.setState({ redirect: true });
    })
  }

  render() {
    return (
      <div>
        {
          this.state.redirect &&
          <Redirect to={{ pathname: '/login', state: { expired: true } }} />
        }
        <div style={CONTAINER_STYLE}>
        "TOTO"
        </div>
      </div>
    );
  }
}

export default Layout;
