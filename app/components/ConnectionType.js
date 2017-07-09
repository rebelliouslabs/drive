// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Home.css';

export default class ConnectionType extends Component {
  render() {
    return (
      <div className="side-bar-area">
        <h2>Connection Type</h2>

        <div className="side-bar-button-list">
          <NavLink to="/connect/bluetooth" activeClassName="selected"><i className="fa fa-bluetooth-b fa-fw" aria-hidden="true"></i> Bluetooth</NavLink>
          <NavLink to="/connect/wifi" activeClassName="selected"><i className="fa fa-wifi fa-fw" aria-hidden="true"></i> Wifi</NavLink>
          <NavLink to="/connect/usb" activeClassName="selected"><i className="fa fa-usb fa-fw" aria-hidden="true"></i> USB</NavLink>
        </div>
      </div>
    );
  }
}
