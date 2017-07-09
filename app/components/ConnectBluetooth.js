// @flow
import React, { Component } from 'react';
import { ipcRenderer } from 'electron';

export default class ConnectBluetooth extends Component {

  constructor(props) {
    super(props);
    ipcRenderer.on('acknowledgeBLEScan', (event, args) => {
      console.log('got acknowledgement!');
    });
  }

  componentDidMount() {
    console.log('call to start ble scan');
    ipcRenderer.send('startBLEScan', null);
  }

  render() {
    return (
      <div id="connect-bluetooth">


      </div>
    );
  }
}
