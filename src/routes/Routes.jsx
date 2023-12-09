/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginApp from '../components/LoginApp';
import RegisterApp from '../components/RegisterApp';

const Routes = () => (
  <Switch>
    <Route path="/RegisterApp" component={RegisterApp} />
    <Route path="/" component={LoginApp} />
  </Switch>
);

export default Routes;
