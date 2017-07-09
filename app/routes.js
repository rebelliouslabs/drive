/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ConnectPage from './pages/ConnectPage';

// Containers
import ConnectContainer from './containers/ConnectContainer';


export default () => (
  <App>
    <Switch>
      <Route path="/connect" component={ConnectContainer}/>
      <Route path="/connect/bluetooth" component={ConnectContainer} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
