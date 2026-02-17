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
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <CustomNavbar />
      <main id="main-content">
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
