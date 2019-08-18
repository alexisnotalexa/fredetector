import React, { Component } from 'react';

import Fred from './Fred';
import Fredetector from './Fredetector';

export default class Landing extends Component {
  state = {
    showDetector: false
  };

  onClick = () => this.setState({ showDetector: !this.state.showDetector });
  render() {
    return (
      <div className={'landing--container'} onClick={this.onClick}>
        {this.state.showDetector
          ? <Fredetector />
          : <Fred />}
      </div>
    );
  }
}