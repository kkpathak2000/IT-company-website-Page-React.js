import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const CustomNavbar = () => {
  return (
    <Navbar dark expand="md" className="custom-navbar">
      <NavbarBrand href="/">IT Company</NavbarBrand>
      <Nav className="ms-auto" navbar>
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
