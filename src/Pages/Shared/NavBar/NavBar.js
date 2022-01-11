import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './NavBar.css';
const NavBar = () => {
    return (
        <>
            <Navbar className="navbar fw-bolder" collapseOnSelect expand="lg" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Sufian</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="menu-link text-black fw-bold"
                            as={Link} to="/home"
                        >Home</Nav.Link>
                        <Nav.Link className="menu-link text-black fw-bold"
                            as={Link} to="/resume"
                        >Resume</Nav.Link>
                        <Nav.Link className="menu-link text-black fw-bold"
                            as={Link} to="/contact"
                        >Contact Me</Nav.Link>
                        <Nav.Link className="menu-link text-black fw-bold"
                            as={Link} to="/about"
                        >About</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;