import React, { Component } from 'react';
import './styles.css';

class NavBar extends Component {
  render() {
    return (
      <div className={'navbar--container'}>
        <h1 className={'navbar--link'}>FREDETECTOR</h1>
        <span className={'navbar--link about'}>/ About</span>
      </div>
    );
  }
}

export default NavBar;