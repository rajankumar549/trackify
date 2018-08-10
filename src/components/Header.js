
import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import '../styles/Header.css';
import { Route, Redirect } from 'react-router'


// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <div id='nav-bar' className='root'>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="display1" className='flex margin-l-10'>
                <Link to='/'>Trackify</Link>
            </Typography>
            <div className='nav-section'>
                <div className='nav-link'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='nav-link'>
                    <Link to='/about'>About</Link>
                </div>
                <div className='nav-link'>
                    <Link to='/about'>Plans</Link>
                </div>
                <div className='nav-link'>
                    <Link to='/auth'>Accounts</Link>
                </div>
            </div>
        </Toolbar>
      </AppBar>
    </div>
)

export default Header
        