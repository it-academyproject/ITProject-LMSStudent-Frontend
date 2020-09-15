import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import UserPanel from './UserPanel.jsx';
import './Header.scss';




function Header () {

    const [activeLink, setActiveLink] = useState();

    return (
        <Navbar className="header" collapseOnSelect expand="lg">
            <Navbar.Brand className="nav-brand" href="#">LMS-Student</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto collapsed-style">
                    <Nav.Link
                        id="teaching-material"
                        className={activeLink === 'teaching-material' ? "nav-item px-3 mx-5 my-0 h5 active-link" : "nav-item px-3 mx-5 my-0 h5"} 
                        href="#" 
                        onClick={() => setActiveLink('teaching-material')}>Teaching Material
                    </Nav.Link>
                    <Nav.Link
                        id="exercices"
                        className={activeLink === 'exercices' ? "nav-item px-3 mx-5 my-0 h5 active-link" : "nav-item px-3 mx-5 my-0 h5"} 
                        href="#" 
                        onClick={() => setActiveLink('exercices')}>Exercices
                    </Nav.Link>
                    <Nav.Link 
                        id="events" 
                        className={activeLink === 'events' ? "nav-item px-3 mx-5 my-0 h5 active-link" : "nav-item px-3 mx-5 my-0 h5"} 
                        href="#" 
                        onClick={() => setActiveLink('events')}>Events
                    </Nav.Link>
                </Nav>
                <Nav>
                    <UserPanel className="user-panel" />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;