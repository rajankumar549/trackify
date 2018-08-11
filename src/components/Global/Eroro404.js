import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default class Error404 extends React.Component{
    componentDidMount(){
        $('#trackify-footer').addClass('none');
    }
    render(){
        return(<div id='trackify-404'>
                    <div id="clouds">
                        <div className="cloud x1"></div>
                        <div className="cloud x1_5"></div>
                        <div className="cloud x2"></div>
                        <div className="cloud x3"></div>
                        <div className="cloud x4"></div>
                        <div className="cloud x5"></div>
                    </div>
                    <div className='c'>
                        <div className='_404'>404</div>
                        <hr/>
                        <div className='_1'>THE PAGE</div>
                        <div className='_2'>WAS NOT FOUND</div>
                        <Link to='/' className='btn'>Go To Trackify</Link>
                    </div>
                </div>);
    }
}