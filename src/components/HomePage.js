import React, { Component } from 'react';
import '../App.css';
import TrackLinkSection from './TrackLinkSection';
//Importing The css Files
import './../styles/Global.css';
import '../styles/HomePage.css';
import TrustedBy from './TrustedBy';
import SocialSection from './SocialSection'
import TestimonialSection from './TestimonialSection';

export default class HomePage extends Component {
  render() {
    return (
        <div className='container'>
            <TrackLinkSection/>
            <TrustedBy />
            <TestimonialSection />
            <SocialSection />
        </div>
    );
  }
}
