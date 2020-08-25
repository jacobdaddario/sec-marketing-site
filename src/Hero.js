import React from "react";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row">
      <div className="w-full h-108 hero-image bg-left bg-cover lg:w-1/2 lg:h-124">
        <HeroText />
      </div>
      <div className="w-full h-108 cog-background lg:w-1/2 lg:h-124"></div>
    </div>
  );
};

export default Hero;
