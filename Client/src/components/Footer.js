import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} IT Solutions Tech. All Rights Reserved.</p>
      <span className="separator" aria-hidden="true">|</span>
      <nav aria-label="Footer Navigation">
        <a href="#privacy">Privacy Policy</a>
        <span className="separator" aria-hidden="true">|</span>
        <a href="#terms">Terms of Service</a>
      </nav>
    </footer>
  );
};

export default Footer;
