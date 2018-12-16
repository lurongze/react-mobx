import React from 'react';
import {
    // withRouter,
    Route, Switch } from 'react-router-dom';

import index from '../pages/index/index';
import list from '../pages/list/index';
import login from '../pages/login/index';

// const Main = withRouter(props => <div {...props} />);

export default () => {
  return (
    <Switch>
      <Route exact path="/" key="1" component={index} />
      <Route exact path="/login" key="3" component={login} />
      <Route path="/list" key="2" component={list} />
    </Switch>
  );
};
