import React, { Component } from 'react';
import './styles.css';

export default class NavBar extends Component {
  onLinkClick = link => this.props.history.push(link);

  renderAbout = () => {
    const { history } = this.props;
    const isAboutPage = history.location.pathname === '/about';
    return (
      <span 
        className={`navbar--link about ${isAboutPage ? 'active' : 'inactive'}`} 
        onClick={() => this.onLinkClick('/about')}
      >
        / About
      </span>
    );
  };

  renderLogo = () => {
    return (
      <h1 
        className={'navbar--link'} 
        onClick={() => this.onLinkClick('/')}
      >
        FREDETECTOR <span role="img" arial-label="magnifying-glass">🔎</span>
      </h1>
    );
  };

  render() {
    return (
      <div className={'navbar--container'}>
        {this.renderLogo()}
        {this.renderAbout()}
      </div>
    );
  }
}