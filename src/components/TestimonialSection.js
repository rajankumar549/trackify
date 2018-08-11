import React, { Component } from 'react';
import logo from '../logo.svg';
import Slider from "react-slick"
import Button from '@material-ui/core/Button';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import './../styles/Global.css';
import Typography from '@material-ui/core/Typography';
import TestimonialCard from "./Global/TestimonialCard";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
export default class TestimonialSection extends Component {
  render() {
    const settingsWeb = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
      const settingsMob= {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
    return (
        <div className='section-margin'>
            <div className='align-center'>
            <BrowserView>
                <p className='green-color-txt font-25'>WHAT OUR HAPPY CLIENTS SAY ABOUT AFFILITEST?</p>
                <hr className='seprator'/>
            </BrowserView>
            <MobileView>
                <p className='green-color-txt'>WHAT OUR HAPPY CLIENTS SAY ABOUT AFFILITEST?</p>
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
                            <div>
                            <TestimonialCard name="Puneet" position="BDE" companyName="comXyz.com"/>
                            </div>
                            <div>
                                <TestimonialCard/>
                            </div>
                            <div>
                            <TestimonialCard name="Puneet" position="BDE" companyName="Xyx.com"/>
                            </div>
                            <div>
                                <TestimonialCard/>
                            </div>
                            <div>
                                <TestimonialCard/>
                            </div>
                            <div>
                                <TestimonialCard/>
                            </div>
                        </Slider>
                    </BrowserView>
                    <MobileView>
                        <Slider {...settingsMob}>
                            <div>
                            <TestimonialCard name="Puneet" position="BDE" companyName="comXyz.com"/>
                            </div>
                            <div>
                                <TestimonialCard/>
                            </div>
                            <div>
                            <   TestimonialCard name="Puneet" position="BDE" companyName="Xyx.com"/>
                            </div>
                            <div>
                                <TestimonialCard/>
                            </div>
                            <div>
                                <TestimonialCard/>
                            </div>
                            <div>
                                <TestimonialCard/>
                            </div>
                        </Slider>
                    </MobileView>
                </div>
            </div>
        </div>
    );
  }
}