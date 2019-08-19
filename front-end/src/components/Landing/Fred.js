import React, { Component } from 'react';
import './styles.css';

import image from './fred.jpg';

export default class Fred extends Component {
  render() {
    return (
      <div className={'fred--container'} onClick={this.props.onClick}>
        <h3 className={'fred--title line'}>This is Fred...</h3>
        <div style={{ position: 'relative' }}>
          <img 
            alt={'fred'} 
            className={'fred--img'} 
            src={image} 
          />
          <span className={'sparkles'} role="img" aria-label="sparkles">✨</span>
        </div>
      </div>
    );
  }
}