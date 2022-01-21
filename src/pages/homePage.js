import React from "react";
import BrandsLove from "../components/BrandsLove";
import CredStory from "../components/CredStory";
import HeroSection from "../components/HeroSection";
import MobileScroll from "../components/MobileScroll";
import WindowPeak from "../components/WindowPeak";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BrandsLove />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <CredStory />
    </>
  );
};

export default HomePage;
