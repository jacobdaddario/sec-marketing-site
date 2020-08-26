import React from "react";
import secLogoWhite from "./assets/images/sec-logo-white.png";

const HeroText = () => (
  <div className="flex flex-col items-center h-full max-w-2xl mx-auto px-4 pt-12 xl:pt-16 2xl:pt-20 2xl:mr-32">
    <img src={secLogoWhite} alt="white SEC logo" className="h-48 2xl:h-56" />
    <h1 className="text-center text-white text-2xl leading-snug tracking-tight font-semibold xl:text-3xl xl:leading-tight 2xl:text-3xl">
      Welcome to the SEC,
      <br />
      <span className="text-maroon-700 px-2 bg-yellow-200 bg-opacity-50 rounded">
        the premier engineering student organization
      </span>
      <br />
      at Texas A&amp;M!
    </h1>
  </div>
);

export default HeroText;
