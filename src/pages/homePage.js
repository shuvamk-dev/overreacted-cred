import React from "react";
import BrandsLove from "../components/BrandsLove";
import MobileScroll from "../components/MobileScroll";
import WindowPeak from "../components/WindowPeak";

const HomePage = () => {
  return (
    <>
      <BrandsLove />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>
    </>
  );
};

export default HomePage;
