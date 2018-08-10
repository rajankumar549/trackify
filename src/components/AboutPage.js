import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Button from '@material-ui/core/Button';

export default class AboutPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Abbout us</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained" color="primary">
          About us page
      </Button>
      </div>
    );
  }
}
