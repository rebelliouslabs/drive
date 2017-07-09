// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ConnectionWifi extends Component {
  render() {
    return (
      <div className="connection-usb">
        <div className="connection-text-center">
          USB is not currently supported.<br/>
          Please select a different Connection Type in the column to the left.
        </div>
      </div>
    );
  }
}
