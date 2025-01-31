import React from 'react';
import homeImage from '../assets/home.png';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <img src={homeImage} alt="home page photo" className="home-image" />
      <div className="home-text">
        <h1>Welcome to VidyaOne Tech</h1>
      </div>
       <p className="home-description">
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <hr className="home-hr" />
      
    </section>
  );
};

export default Home;