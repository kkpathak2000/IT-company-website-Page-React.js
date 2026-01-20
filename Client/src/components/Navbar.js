import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../assets/logo.png';

const CustomNavbar = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar dark expand="md" className="custom-navbar">
      <NavbarBrand className="navbar-class" href="#home" onClick={(e) => handleScroll(e, '#home')}>
       <div className='navbar-logo-div'>
        <img src={logo} alt="Company Logo" className="navbar-logo" />
       </div>
      </NavbarBrand>
      <Nav className= "nav-class" navbar>
        <NavItem>
          <NavLink href="#home" onClick={(e) => handleScroll(e, '#home')}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#services" onClick={(e) => handleScroll(e, '#services')}>Our Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact Us</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;