import React, { Component } from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AppLayout from './components/AppLayout';
import "./styles/Global.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    );
  }
}

export default App;