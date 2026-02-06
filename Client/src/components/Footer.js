import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} IT Solutions Tech. All Rights Reserved.</p>
      <nav aria-label="Footer Navigation">
        <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a>
      </nav>
    </footer>
  );
};

export default Footer;