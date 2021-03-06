import React, { Component } from 'react';
import logo from '../logo.svg';
import Slider from "react-slick"
import Button from '@material-ui/core/Button';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import './../styles/Global.css';
import './../styles/TrustedBy.css';
import Typography from '@material-ui/core/Typography';
import MediaCard from "./Global/MediaCard";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
export default class TrustedBy extends Component {
  populateClients(){
    let clients = require('../data/clients.json');
    let result = clients.map(client => (<div className='flex-column' key={client.id}><img src={client.src} width='200' alt='client image' className='clientCard margin-auto'/></div>));
    return result;
  }
  render() {
    const settingsWeb = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 1000,
        cssEase: "linear"
      };
      const settingsMob= {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        cssEase: "linear"
      };
    return (
        <div>
            <div className='align-center'>
            <BrowserView>
                <p className='green-color-txt font-25'>Our Happy Clients :-)</p>
                <hr className='seprator'/>
            </BrowserView>
            <MobileView>
                <p className='green-color-txt'>Our Happy Clients :-ß</p>
                <hr className='seprator'/>
            </MobileView>
            </div>
            <div id='trusted-by-entry'> 
                <div className='trusted-by-heading'>
                <Typography variant="title" gutterBottom>
                    Trusted By
                </Typography>
                </div>
                <div>
                    <BrowserView>
                        <Slider {...settingsWeb}>
                            {this.populateClients()}
                            {/* <div>
                            <MediaCard name="Puneet" position="BDE" companyName="comXyz.com"/>
                            </div>
                            <div>
                                <MediaCard/>
                            </div>
                            <div>
                            <   MediaCard name="Puneet" position="BDE" companyName="Xyx.com"/>
                            </div>
                            <div>
                                <MediaCard/>
                            </div>
                            <div>
                                <MediaCard/>
                            </div>
                            <div>
                                <MediaCard/>
                            </div> */}
                        </Slider>
                    </BrowserView>
                    <MobileView>
                        <Slider {...settingsMob}>
                            <div>
                            <MediaCard name="Puneet" position="BDE" companyName="comXyz.com"/>
                            </div>
                            <div>
                                <MediaCard/>
                            </div>
                            <div>
                            <   MediaCard name="Puneet" position="BDE" companyName="Xyx.com"/>
                            </div>
                            <div>
                                <MediaCard/>
                            </div>
                            <div>
                                <MediaCard/>
                            </div>
                            <div>
                                <MediaCard/>
                            </div>
                        </Slider>
                    </MobileView>
                </div>
            </div>
        </div>
    );
  }
}