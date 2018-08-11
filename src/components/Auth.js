import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../styles/Auth.css';
import $ from "jquery";
import Button from '@material-ui/core/Button';

export default class Auth extends Component {
  componentDidMount(){
    $(document).on('click', '.below button', function(){
      var belowCard = $('.below'),
      aboveCard = $('.above'),
      parent = $('.form-collection');
      parent.addClass('animation-state-1');
      setTimeout(function(){
        belowCard.removeClass('below');
        aboveCard.removeClass('above');
        belowCard.addClass('above');
        aboveCard.addClass('below');
        setTimeout(function(){
          parent.addClass('animation-state-finish');
          parent.removeClass('animation-state-1');
          setTimeout(function(){
            aboveCard.addClass('turned');
            belowCard.removeClass('turned');
            parent.removeClass('animation-state-finish');
          }, 300)
        }, 10)
      }, 300);
    });
    if(window.location.href.includes('auth'))
      $('body').addClass('auth');
  }
  render() {
    return (
      <div id='trackify-auth'>
        <div className='flex-column top-space'>
          <span className='none'>By</span>
          <img src="https://static.vnative.co/images/59faedbf12d78.png" width='300' className='margin-auto'/>
        </div>
        <div className="form-collection">
          <div className="card elevation-3 limit-width log-in-card below turned">
            <div className="card-body">
              <div className="input-group email">
                <input type="text" placeholder="Email"/>
              </div>
              <div className="input-group password">
                <input type="password" placeholder="Password"/>
              </div>
              <a href="#" className="box-btn">Forgot Password?</a>
            </div>
            <div className="card-footer">
              <button type="submit" className="login-btn">Log in</button>
            </div>
          </div>
          <div className="card elevation-2 limit-width sign-up-card above">
            <div className="card-body">
              <div className="input-group fullname">
                <input type="text" placeholder="Full Name"/>
              </div>
              <div className="input-group email">
                <input type="email" placeholder="Email"/>
              </div>
              <div className="input-group password">
                <input type="password" placeholder="Password"/>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="signup-btn">Sign Up</button>
            </div>
          </div>
      </div>
    </div>
    );
  }
}
