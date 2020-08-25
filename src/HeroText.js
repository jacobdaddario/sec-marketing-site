import React from "react";
import secLogoWhite from "./assets/images/sec-logo-white.png";

const HeroText = () => (
  <div className="flex flex-col items-center max-w-2xl mx-auto px-4 pt-6 xl:pt-16">
    <img src={secLogoWhite} alt="white SEC logo" className="h-48" />
    <h2 className="text-center text-white text-2xl leading-snug tracking-tight font-semibold xl:text-3xl xl:leading-tight ">
      Welcome to the SEC,
      <br />
      <span className="text-maroon-700 px-2 bg-yellow-200 bg-opacity-50 rounded">
        the premier engineering student organization
      </span>
      <br />
      at Texas A&amp;M!
    </h2>
  </div>
);

export default HeroText;
