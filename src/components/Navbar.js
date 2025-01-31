import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const CustomNavbar = () => {
  return (
    <Navbar dark expand="md" className="custom-navbar">
      <NavbarBrand className="navbar-class">
       <div className='navbar-logo-div'>
        <img src="https://cdn.vidyaone.com/Company/Website/logo.png" alt="Company Logo" className="navbar-logo" />
       </div>
      </NavbarBrand>
      <Nav className= "nav-class" navbar>
        <NavItem>
          <NavLink href="#home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#services">Our Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact Us</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
