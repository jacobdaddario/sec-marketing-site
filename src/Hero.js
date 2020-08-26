import React from "react";
import HeroText from "./HeroText";
import CallToAction from "./CallToAction";

const Hero = () => {
  return (
    <div className="flex flex-col w-full xl:flex-row">
      <div className="w-full h-124 hero-image bg-left bg-cover xl:w-1/2 2xl:h-140">
        <HeroText />
      </div>
      <div className="w-full h-108 cog-background xl:w-1/2 xl:h-124 2xl:h-140">
        <CallToAction />
      </div>
    </div>
  );
};

export default Hero;
