import React, { useState, useEffect, useRef } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../assets/logo.png';

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

const CustomNavbar = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const navbarRef = useRef(null);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(targetId);
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = document.querySelectorAll('section[id]');
      const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 0;
      const scrollPosition = window.scrollY + navbarHeight;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const newActiveLink = `#${section.id}`;
          setActiveLink(currentActiveLink => {
            if (newActiveLink !== currentActiveLink) {
              return newActiveLink;
            }
            return currentActiveLink;
          });
        }
      });
    };

    const debouncedScrollHandler = debounce(handleScrollEvent, 100);

    window.addEventListener('scroll', debouncedScrollHandler);
    return () => {
      window.removeEventListener('scroll', debouncedScrollHandler);
    };
  }, []);

  return (
    <Navbar dark expand="md" className="custom-navbar" ref={navbarRef}>
      <NavbarBrand className="navbar-class" href="#home" onClick={(e) => handleScroll(e, '#home')}>
       <div className='navbar-logo-div'>
        <img src={logo} alt="Company Logo" className="navbar-logo" />
       </div>
      </NavbarBrand>
      <Nav className= "nav-class" navbar>
        <NavItem>
          <NavLink
            href="#home"
            className={activeLink === '#home' ? 'active' : ''}
            aria-current={activeLink === '#home' ? 'page' : undefined}
            onClick={(e) => handleScroll(e, '#home')}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#services"
            className={activeLink === '#services' ? 'active' : ''}
            aria-current={activeLink === '#services' ? 'page' : undefined}
            onClick={(e) => handleScroll(e, '#services')}
          >
            Our Services
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#contact"
            className={activeLink === '#contact' ? 'active' : ''}
            aria-current={activeLink === '#contact' ? 'page' : undefined}
            onClick={(e) => handleScroll(e, '#contact')}
          >
            Contact Us
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;