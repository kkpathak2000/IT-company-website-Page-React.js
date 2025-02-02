import React from 'react';
import homeImage from '../assets/home.png';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-image-container">
        <img src={homeImage} alt="home page" className="home-image" />
        <div className="home-text-overlay">
          <h1 className='home-heading'>Welcome to VidyaOne Tech</h1>
        </div>
      </div>

      <p className="home-description">
      VIDYA - School Management Software is a comprehensive solution designed to streamline school operations with 15+ intelligent modules, covering everything from student enrollment and attendance tracking to fee management and academic reporting. It also features an integrated Auto SMS Responder, ensuring seamless communication between schools, parents, and staff by sending instant updates, reminders, and notifications.
      </p>

      <hr className="home-hr" />
    </section>
  );
};

export default Home;
