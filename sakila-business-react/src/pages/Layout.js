import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import * as authService from '../services/authService';

import ActorManagement from './ActorManagement';
import CustomerManagement from './CustomerManagement';

const CONTAINER_STYLE = {
  marginTop: 60,
  minHeight: '80vh',
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
          <Switch>
            <Route exact path="/" component={CustomerManagement} />
            <Route exact path="/CustomerManagement" component={CustomerManagement} />
            <Route exact path="/ActorManagement" component={ActorManagement} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Layout;
