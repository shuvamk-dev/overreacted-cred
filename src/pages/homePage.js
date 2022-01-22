import React from "react";
import BrandsLove from "../components/BrandsLove";
import Header from "../components/common/Header";
import CredStory from "../components/CredStory";
import FeelSpecial from "../components/FeelSpecial";
import HeroSection from "../components/HeroSection";
import MobileScroll from "../components/MobileScroll";
import ProductShowcase from "../components/ProductShowcase";
import WindowPeak from "../components/WindowPeak";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
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
