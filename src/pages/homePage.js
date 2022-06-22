import React from "react";
import AppRating from "../components/AppRating";
import BrandsLove from "../components/BrandsLove";
import Footer from "../components/common/footer";
import Header from "../components/common/Header";
import CredStory from "../components/CredStory";
import InfoContainer from "../components/InfoContrainer";
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
      <InfoContainer
        title="feel special more often."
        subtitle="exclusive rewards for paying your bills"
        description="every time you pay your credit card bills on CRED, you receive
        CRED coins. you can use these to win exclusive rewards or get
        special access to curated products and experiences. on CRED, good
        begets good."
        backgroundImage='https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg.jpg'
        backgroundColor='--bg-red'
        btnText="Explore rewards"
        />
      <BrandsLove />
      <InfoContainer
        title="we take your money matters seriously."
        subtitle="so that you don’t have to."
        description="never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always."
        backgroundImage='https://web-images.credcdn.in/_next/assets/images/home-page/money-matters-bg.jpg'
        backgroundColor='--bg-blue'
        btnText="Experience the upgrade"
        />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>
       <InfoContainer
        title="security first. and second."
        subtitle="what’s yours remains only yours."
        description="CRED ensures that all your personal data and transactions are encrypted, and secured so what’s yours remains only yours. there’s no room for mistakes because we didn’t leave any."
        backgroundImage='https://web-images.credcdn.in/_next/assets/images/home-page/security-bg.jpg'
        backgroundColor='--bg-purple'
        btnText="Become a member"
        />
      <CredStory />
      <AppRating />
      <Footer />
    </>
  );
};

export default HomePage;
