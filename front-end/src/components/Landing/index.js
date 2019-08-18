import React, { Component } from 'react';

import Fred from './Fred';
import Fredetector from './Fredetector';

export default class Landing extends Component {
  render() {
    return (
      <div className={'landing--container'}>
        {/* <Fred /> */}
        <Fredetector />
      </div>
    );
  }
}