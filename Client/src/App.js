import React from 'react';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';


const App = () => {
  return (
    <div className="app">
      <CustomNavbar />
      <Home />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
