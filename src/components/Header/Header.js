import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Header.module.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <header className={classes.siteHeader}>
            <nav className={classes.nav}><NavLink to="/" className="brand">
                <img alt="" src={logo} style={{height: '25px'}}/>
            </NavLink></nav>
            <nav className={classes.nav}><NavLink to='/author'>Author</NavLink></nav>
            <nav className={classes.nav}><NavLink to='/tweets'>Tweets</NavLink></nav>
        </header>
    );
};

export default Header;