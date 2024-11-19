import React from 'react';
import HeroBannerImage from '../assets/images/girlbanner.jpg';
import '../styles/HeroBanner.css';

const HeroBanner = () => (
  <div className="hero-banner">
    <h1 className="hero-title">PulseFit</h1>
    <h2 className="hero-subtitle">
      Sweat, Smile <br />
      And Repeat
    </h2>
    <p className="hero-description">
      Check out the most effective exercises personalized to you
    </p>
    <div className="hero-button-container">
      <a href="#exercises" className="hero-button">Explore Exercises</a>
    </div>
    <h1 className="hero-background-text">PulseFit</h1>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </div>
);

export default HeroBanner;






