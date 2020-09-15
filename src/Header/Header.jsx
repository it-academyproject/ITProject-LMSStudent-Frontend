import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import UserPanel from './UserPanel.jsx';
import './Header.scss';
import { Link } from 'react-router-dom';




function Header () {

    const [activeLink, setActiveLink] = useState();
    const normalLinkStyle= "nav-item px-3 mx-5 my-0";
    const activeLinkStyle = "nav-item px-3 mx-5 my-0 active-link";

    return (
        <Navbar className="header" collapseOnSelect expand="lg">
            <Navbar.Brand className="nav-brand" href="#">LMS-Student</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto collapsed-style">
                    <Link
                        id="teaching-material"
                        className={activeLink === 'teaching-material' ? activeLinkStyle : normalLinkStyle } 
                        to="/material" 
                        onClick={() => setActiveLink('teaching-material')}>Teaching Material
                    </Link>
                    <Link
                        id="exercises"
                        className={activeLink === 'exercises' ? activeLinkStyle : normalLinkStyle } 
                        to="/exercises" 
                        onClick={() => setActiveLink('exercises')}>Exercises
                    </Link>
                    <Link 
                        id="events" 
                        className={activeLink === 'events' ? activeLinkStyle : normalLinkStyle } 
                        to="/events" 
                        onClick={() => setActiveLink('events')}>Events
                    </Link>
                </Nav>
                <Nav>
                    <UserPanel className="user-panel" />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;