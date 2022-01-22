import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="max-width flex header">
      <img
        src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
        className="header-logo"
      />
      <div className="only-mobile"></div>
      <div className="non-mobile flex">
        <div className="header-nav-item">credit score check</div>
        <div className="header-nav-item">credit card bill payment</div>
      </div>
    </div>
  );
};

export default Header;
