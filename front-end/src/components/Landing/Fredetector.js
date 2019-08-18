import React, { Component } from 'react';
import './styles.css';

export default class Fredetector extends Component {
  render() {
    return (
      <div className={'fredetector--container'}>
        <h3 className={'fredetector--title'}>...And this is Fredetector!</h3>
        <span className={'fredetector--desc'}>Start by uploading a picture and Fredetector will determine if the picture is of Fred.</span>
        <div  className={'fredetector--upload'}>
          <span>Drag a file here or <b>browse</b> for a file to upload.</span>
        </div>
        <div className={'fredetector--controls'}>
          <button className={'button button--upload'}>Upload</button>
          <button className={'button button--restart'}>Restart</button>
        </div>
      </div>
    );
  }
}