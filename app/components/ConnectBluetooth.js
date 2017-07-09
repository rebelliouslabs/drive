// @flow
import noble from 'noble';
import React, { Component } from 'react';


export default class ConnectBluetooth extends Component {

  constructor(props) {
    super(props);
    this.state = {
      connections: [],
    }

    this.searchForConnection = this.searchForConnection.bind(this);
  }

  componentDidMount() {
    noble.on('stateChange', this.nobleStateChange);
    this.searchForConnection();
  }

  nobleStateChange(state) {
    console.log(state);
  }

  searchForConnection() {
    noble.startScanning([], false, this.addToConnectionList)
  }

  addToConnectionList(error) {

  }

  render() {
    return (
      <div id="connect-bluetooth">


      </div>
    );
  }
}
