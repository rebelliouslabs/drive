// @flow
import React, { Component } from 'react';
import ConnectPage from '../pages/ConnectPage';

export default class ConnectContainer extends Component {
  render() {

    const {location} = this.props;
    return (
      <ConnectPage location={location} />
    );
  }
}
