
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
    <header id='trackify'>
        <section>
        <a href="https://www.linkedin.com/in/sutharmayur" id="logo" target="_blank">trackify</a>
        <label htmlFor="toggle-1" className="toggle-menu"><ul><li></li> <li></li> <li></li></ul></label>
        <input type="checkbox" id="toggle-1"/>
        <nav>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Plans</Link></li>
        <li><Link to='/auth'>Accounts</Link></li>
        <li><Link to='/about'>About</Link></li>
        </ul>
        </nav>
        </section>
    </header>
)

export default Header
        