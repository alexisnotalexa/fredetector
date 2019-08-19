import React, { Component } from 'react';
import './styles.css';

import FileUploader from './FileUploader';

export default class Fredetector extends Component {
  state = {
    disableUpload: true,
    file: null
  };

  onFileChange = file => {
    let fileType = file[0].type;
    switch(fileType) {
      case 'image/jpeg':
      case 'image/png':
        this.setState({ file: file[0], disableUpload: false });
        break;
      default:
        alert('Oops!  Only jpg/png files are accepted.');
        break;
    }
  };

  onRestartClick = () => this.setState({ file: null, disableUpload: true });

  renderContent = () => {
    return (
      <div className={'fredetector--content'}>
        <span className={'fredetector--desc'}>Start by uploading a picture and Fredetector will determine if the picture is of Fred.</span>
        <FileUploader file={this.state.file} onFileChange={this.onFileChange} />
        <div className={'fredetector--controls'}>
          <button 
            className={'button button--upload'} 
            disabled={this.state.disableUpload}
          >
            Upload
          </button>
          <button 
            className={'button button--restart'} 
            onClick={this.onRestartClick}
          >
            Restart
          </button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className={'fredetector--container'}>
        <h3 className={'fredetector--title line'}>...And this is Fredetector!</h3>
        {this.renderContent()}
      </div>
    );
  }
}