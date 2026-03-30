import React from 'react';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './App.css';


const App = () => {
  return (
    <div className="app">
      <a href="#home" className="skip-link">
        Skip to main content
      </a>
      <CustomNavbar />
      <Home />
      <Services />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
