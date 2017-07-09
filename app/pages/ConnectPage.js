// @flow
import React, { Component } from 'react';
import ConnectionType from '../components/ConnectionType';
import ConnectionInfo from '../components/ConnectionInfo';
import ConnectEmpty from '../components/ConnectEmpty';
import ConnectWifi from '../components/ConnectWifi';
import ConnectUSB from '../components/ConnectUSB';
import ConnectBluetooth from '../components/ConnectBluetooth';


const getConnectionPartial = (location) => {
  switch (location.pathname) {
    case '/connect/wifi':
      return (<ConnectWifi />);
    case '/connect/usb':
      return (<ConnectUSB />);
    case '/connect/bluetooth':
      return (<ConnectBluetooth />);
    default:
      return (<ConnectEmpty />);
  }
}

export default class ConnectPage extends Component {
  render() {
    const location = this.props.location;
    console.log(location);
    return (
      <div id="connect-page">
        <h1>Connect to Device</h1>
        <div className="wrapper">
          <div className="side-bar side-bar-left">
            <ConnectionType />
            <ConnectionInfo />
          </div>
          <div className="right-selection-area">
            <h2>Available Connections</h2>
            <div className="well">
              {getConnectionPartial(location)}
            </div>
            <div className="button-right">
              <button>Connect</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
