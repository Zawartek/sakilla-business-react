import React, {Component} from 'react';
import './NavBar.css';

import { Link } from 'react-router-dom';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Lock from 'material-ui/svg-icons/action/lock';
import FlatButton from 'material-ui/FlatButton';

import colors from '../../colors';
import * as authService from '../../services/authService';

const NAVBAR_MAIN_STYLE = {
  color: colors.PRIMARY
}

const NAVBAR_LOGOUT_STYLE = {
  marginLeft: 'auto',
  padding: 10,
  verticalAlign: 'middle',
}

class NavBar extends Component {

  onLogout = () => {
    authService.logout();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="NavBar">
        <div className="main" style={NAVBAR_MAIN_STYLE}>
          <Link to="/">HOME</Link>
        </div>
        <nav className="navigation">
          <div className="link">
            <FlatButton
              label="Customer Management"
              href="/CustomerManagement"
              className="menuBtn"/>
            <FlatButton
              label="Rental Management"
              href="/RentalManagement"
              className="menuBtn"/>
          </div>
        </nav>
          <div style={NAVBAR_LOGOUT_STYLE}>
            <Menu>
              <MenuItem primaryText="Déconnexion" onClick={this.onLogout} rightIcon={<Lock />} />
            </Menu>
          </div>
      </div>);
  }
}
export default NavBar;
