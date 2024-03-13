import "./hero.css";

import HeroImage from "../../assets/hero-image.png";
import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="hero-header">
          <p>
            COVID-19 Vaccination Got Easier With, <span>Vaccination.ng</span>
          </p>
        </div>
        <div className="hero-sub-header">
          <p>
            Vaccination.ng will help you find the nearest centre for
            vaccination, in all 36 states in Nigeria.
          </p>
        </div>
        <div className="hero-buttons-container">
          <button className="contained-button">Get Vaccine</button>
          <button className="outlined-button">Help Centre</button>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-image-container">
          <img src={HeroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
