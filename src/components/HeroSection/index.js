import React from "react";
import Button from "../common/Button";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="flex flex-col absolute-center hero-section max-width">
      <div className="hero-heading">rewards for paying credit card bills.</div>
      <div className="hero-subheading">
        join 7.5M+ members who win rewards and cashbacks everyday
      </div>
      <Button buttonText="Download CRED" />
    </div>
  );
};

export default HeroSection;
