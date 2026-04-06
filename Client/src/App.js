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
      <a
        href="#main-content"
        className="visually-hidden-focusable btn btn-info position-fixed top-0 start-0 m-2"
        style={{ zIndex: 1060 }}
      >
        Skip to main content
      </a>
      <CustomNavbar />
      <main id="main-content" tabIndex="-1" style={{ outline: 'none' }}>
        <Home />
        <Services />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
