import React from "react";
import Hero from "../components/hero/hero";
import Carousel from "../components/carousel/carousel";
import InstaGallery from "../components/instaGallery/instaGallery";

const home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Carousel />
      <InstaGallery />
    </div>
  );
};

export default home;
