import React from "react";
import "./hero1.scss";
import hero_img from "../../assets/images/hero-1.png";

const HeroComponent1 = () => {
  return (
    <div className="hero">
      <h1 className="hero__title">Bundle TV</h1>
      <p className="hero__description">
        Telus offers you the most customizable TV package in the market with
        simple 8 steps.
      </p>
      <button className="hero__button">Start Your Bundle</button>
      <img src={hero_img} alt="placeholder" className="hero__image" />
    </div>
  );
};

export default HeroComponent1;
