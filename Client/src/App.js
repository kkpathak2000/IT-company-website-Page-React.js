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
        className="visually-hidden-focusable bg-dark text-info p-2 m-2 border border-info"
        style={{ zIndex: 1050, position: 'absolute', top: 0, left: 0 }}
      >
        Skip to main content
      </a>
      <CustomNavbar />
      <main id="main-content" tabIndex="-1">
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
