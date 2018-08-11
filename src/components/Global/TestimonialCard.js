import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avtar from "./../../data/img_avatar.png";
import './../../styles/Testimonial.css';

export default function TestimonialCard(props) {
  const { classes, theme } = props;
  return (
    <figure className="snip1204">
    <blockquote>Calvin: Sometimes when I'm talking to other people, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
    <div className="author">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample7.jpg" alt="sq-sample7"/>
        <h5>Pelican Steve</h5><span>LittleSnippets</span>
    </div>
    </figure>
  );
}

TestimonialCard.defaultProps = {
    name:'Rajan kumar',
    position :'Software Engineer',
    companyName :'vNative.com',
    imageUrl: Avtar
 };
