import React from 'react';
import CustomNavbar from './Navbar';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
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
