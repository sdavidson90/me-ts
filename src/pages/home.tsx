import React from "react";
import Hero from "../components/hero/hero";
import Carousel from "../components/carousel/carousel";

const home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Carousel />
    </div>
  );
};

export default home;
