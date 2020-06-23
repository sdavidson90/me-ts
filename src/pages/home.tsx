import React from "react";
import Hero from "../components/hero/Hero";
import Carousel from "../components/carousel/Carousel";
import InstaGallery from "../components/instaGallery/InstaGallery";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Carousel />
      <InstaGallery />
    </div>
  );
};

export default Home;
