import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, NavLink, Switch } from 'react-router-dom'
import './App.css';
import GitHub from './Github'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>There' no party like an</h3>
          <h1 className="App-title">API Party</h1>
        </header>

        <ul className="navLinks">
          <li>
            <NavLink to="/github">GitHub API</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/github" component={GitHub} />
          <Route render={()=>(
            <p>To get started, click one of the links above. </p>
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;