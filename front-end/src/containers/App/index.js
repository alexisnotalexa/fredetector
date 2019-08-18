import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';

import NavBar from '../../components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default withRouter(App);
