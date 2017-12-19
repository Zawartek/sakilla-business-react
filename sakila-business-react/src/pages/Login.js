import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import ActionLockOpen from 'material-ui/svg-icons/action/lock-open';


import * as authService from '../services/authService';

const BACKGROUND_STYLE = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '90vh',
}

const LOGIN_STYLE = {
  width: 400,
  margin: 30,
}

const TITLE_LOGIN_STYLE = {
  margin: "10px",
}

const INPUT_LOGIN_STYLE = {
  padding: "16px 24px",
}

function ErrorMessage(props) {
  const style = {
    color: 'red',
    textAlign: 'center',
  }
  return <div style={style}>{props.message}</div>
}

class Login extends Component {

  state = {
    username: 'eee',
    password: '1244',
    error: false,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    authService.login(username, password).then(res => {
      this.props.history.push('/');
    }).catch(err => {
      this.setState({ error: true})
    })
  }

  render() {
    const {
      error,
    } = this.state;
    const urlState = this.props.location.state;
    return (
      <div>
        <div style={BACKGROUND_STYLE}>
          <div style={LOGIN_STYLE}>
            <Card zDepth={3}>
                <form onSubmit={this.handleSubmit}>
                  <CardText style={INPUT_LOGIN_STYLE}>
                    <h1 className="primary-color center" style={TITLE_LOGIN_STYLE}>SAKILA BUSINESS</h1>
                    <TextField
                      hintText="Nom d'utilisateur"
                      onChange={(e) => this.setState({ username: e.target.value })}
                      fullWidth
                      autoFocus
                      />
                    <TextField
                      type="password"
                      hintText="Mot de passe"
                      onChange={(e) => this.setState({ password: e.target.value })}
                      fullWidth
                      />
                    {
                      error &&
                      <ErrorMessage message="Erreur de login" />
                    }
                    {
                      urlState && urlState.expired &&
                      <ErrorMessage message="La session a expiré, veuillez vous reconnectez." />
                    }
                    <CardActions style={{ textAlign: 'center' }}>
                      <FlatButton
                        type="submit"
                        secondary
                        label="Connexion"
                        labelPosition="after"
                        icon={<ActionLockOpen />}
                      />
                    </CardActions>
                  </CardText>
                </form>
            </Card>
          </div>
        </div>
      </div>
    );

  }
}

export default Login;
