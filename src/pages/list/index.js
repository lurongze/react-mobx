import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './index.css';
import index from "./detail/index";

class Index extends Component {

  render() {
    const { match } = this.props
    return (
      <div className="App">
          App - list <Link to={`${match.path}/detail`}>to detail</Link>
          <div>
              <Switch>
                  <Route exact path={`${match.path}/detail`} component={index} />
              </Switch>
          </div>
      </div>
    );
  }
}

export default Index;
