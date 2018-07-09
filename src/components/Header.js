import React, { Component } from 'react';
import logo from '../logo.svg';
import MenuAppBar from './Navbar';
class Header extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <header className="header">
           <MenuAppBar/>
      </header>
    );
  }
}

export default Header;
