import React from "react";
import Button from "../common/Button";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="flex absolute-center hero-section">
      This is hero section
      <Button buttonText="Download CRED" />
    </div>
  );
};

export default HeroSection;
