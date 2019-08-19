import React, { Component } from 'react';
import './styles.css';

class FileUploader extends Component {
  state = {
    dragging: false
  };

  uploader = React.createRef();

  componentDidMount() {
    let container = this.uploader.current;
    container.addEventListener('dragenter', this.handleDragIn);
    container.addEventListener('dragleave', this.handleDragOut);
    container.addEventListener('dragover', this.handleDrag);
    container.addEventListener('drop', this.handleDrop);
  }

  componentWillUnmount() {
    let container = this.uploader.current;
    container.removeEventListener('dragenter', this.handleDragIn);
    container.removeEventListener('dragleave', this.handleDragOut);
    container.removeEventListener('dragover', this.handleDrag);
    container.removeEventListener('drop', this.handleDrop);
  }

  eventHandler = event => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  handleDrag = event => {
    this.eventHandler(event);
  };

  handleDragIn = event => {
    this.eventHandler(event);
    if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
      this.setState({ dragging: true });
    }
  };

  handleDragOut = event => {
    this.eventHandler(event);
    this.setState({ dragging: false });
  };

  handleDrop = event => {
    this.eventHandler(event);
    this.setState({ dragging: false });
    if (event.dataTransfer.files && event.dataTransfer.files.length === 1) {
      this.props.onFileChange(event.dataTransfer.files);
      event.dataTransfer.clearData();
    } else if (event.dataTransfer.files.length > 1) {
      alert('Oops!  Fredetector only allows one image at a time.');
    }
  };

  renderOverlay = () => {
    return (
      <div className={'file-uploader--overlay'}>
        <span>Drop here!</span>
      </div>
    );
  }

  render() {
    return (
      <div className={'fredetector--upload'} ref={this.uploader}>
        {/* {this.state.dragging ? this.renderOverlay() : null} */}
        {this.renderOverlay()}
        {this.props.file
          ? <span>{this.props.file.name}</span>
          : <span>Drag a file here or <b>browse</b> for a file to upload.</span>}
      </div>
    );
  }
}

export default FileUploader;