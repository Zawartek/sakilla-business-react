import React from 'react';
import './NavBar.css';

import { Link } from 'react-router-dom';

import colors from '../../colors';

const NAVBAR_MAIN_STYLE = {
  color: colors.PRIMARY
}

const NavBar = () => 
      <div className="NavBar">
        <div className="main" style={NAVBAR_MAIN_STYLE}>
          <Link to="/">HOME</Link>
        </div>
        <nav className="navigation">
          <div className="link">
                <Link to="/CustomerManagement">Customer Management</Link>
                <Link to="/RentalManagement">Rental Management</Link>
          </div>
        </nav>
      </div>

export default NavBar;
