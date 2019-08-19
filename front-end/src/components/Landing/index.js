import React, { Component } from 'react';

import Fred from './Fred';
import Fredetector from './Fredetector';

export default class Landing extends Component {
  state = {
    showDetector: false
  };

  onClick = () => this.setState({ showDetector: true });

  render() {
    return (
      <div className={'landing--container'}>
        {this.state.showDetector
          ? <Fredetector />
          : <Fred onClick={this.onClick} />}
      </div>
    );
  }
}