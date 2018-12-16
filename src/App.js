import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import routers from './routers/routes';
import stores from './stores/index';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <HashRouter>
          {routers()}
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
