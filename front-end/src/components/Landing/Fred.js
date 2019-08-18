import React, { Component } from 'react';
import './styles.css';

import image from './fred.jpg';

export default class Fred extends Component {
  render() {
    return (
      <div className={'fred--container'}>
        <h3 className={'fred--title'}>This is Fred...</h3>
        <img 
          alt={'fred'} 
          className={'fred--img'} 
          src={image} 
        />
      </div>
    );
  }
}