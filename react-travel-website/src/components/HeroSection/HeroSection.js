import React from "react";
import { Button } from "../Button/Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {<video src="/videos/home-page-football.mov" autoPlay loop muted></video>}
      <h1>Thailand - Laos - Vietnam</h1>
      <p>11th Feb to 1st March</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonClass="but--outline"
          buttonSize="btn--large"
          route="/map"
        >
          ROUTE MAP
        </Button>

        <Button
          className="btns"
          buttonClass="btn--primary"
          buttonSize="btn--large"
          route="/photo-gallery"
        >
          PHOTO GALLERY
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
