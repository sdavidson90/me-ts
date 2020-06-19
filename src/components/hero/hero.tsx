import React from "react";
import imageOne from "../../assets/images/hannah-morgan-ycVFts5Ma4s-unsplash.jpg";

const hero: React.FC = () => {
  return (
    <div className="hero">
      <img src={imageOne} alt="hero" className="hero__image" />
    </div>
  );
};

export default hero;
