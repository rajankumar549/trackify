import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import TrackLinkSection from './TrackLinkSection';
//Importing The css Files
import './../styles/Global.css';
import '../styles/HomePage.css';
import TrustedBy from './TrustedBy';

export default class HomePage extends Component {
  render() {
    return (
        <div className='container'>
            <TrackLinkSection/>
            <TrustedBy />
        </div>
    );
  }
}
