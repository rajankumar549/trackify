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
export default class TrustedBy extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
    return (
        <div id='trusted-by-entry'> 
            <div className='trusted-by-heading'>
            <Typography variant="title" gutterBottom>
                Trusted By
            </Typography>
            </div>
            <div>
                <Slider {...settings}>
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
        </div>
        </div>
    );
  }
}