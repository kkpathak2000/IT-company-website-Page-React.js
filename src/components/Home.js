import React from 'react';
import homeImage from '../assets/home.png';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-image-container">
        <img src={homeImage} alt="home page" className="home-image" />
        <div className="home-text-overlay">
          <h1 className='home-heading'>Welcome to It Solutions Tech</h1>
        </div>
      </div>

      <p className="home-description">
      IT Solutions Software is a comprehensive solution designed to streamline software operations with 15+ intelligent modules, covering everything from software enrollment and software tracking to software management and software reporting. It also features an integrated Auto SMS Responder, ensuring seamless communication between stakeholders, admin, and staff by sending instant updates, reminders, and notifications.
      </p>

      <hr className="home-hr" />
    </section>
  );
};

export default Home;
