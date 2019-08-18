import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';

import About from '../../components/About';
import Landing from '../../components/Landing';
import NavBar from '../../components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar history={this.props.history} />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
