import React from "react";
import "./hero2.scss";
import hero_img2 from "../../assets/images/hero-2.png";

const HeroComponent2 = () => {
  return (
    <div className="hero2">
      <img src={hero_img2} alt="placeholder" className="hero2__image" />
      <h1 className="hero2__title">Your Bundle</h1>
      <p className="hero2__description">
        Based on your selection, we have created a package especially for you.
      </p>
    </div>
  );
};

export default HeroComponent2;
