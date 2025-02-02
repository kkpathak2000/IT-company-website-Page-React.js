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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <hr className="home-hr" />
    </section>
  );
};

export default Home;
