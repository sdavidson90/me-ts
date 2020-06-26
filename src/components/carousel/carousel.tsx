import React from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div className="clothing">
      <div className="clothing__title">New Arrivals</div>
      <div className="clothing__item">
        <Link
          to="/shop"
          className="clothing__item-img clothing__item-img-one"
        ></Link>
        <Link
          to="/shop"
          className="clothing__item-img clothing__item-img-two"
        ></Link>
        <Link
          to="/shop"
          className="clothing__item-img clothing__item-img-three"
        ></Link>
        <Link
          to="/shop"
          className="clothing__item-img clothing__item-img-four"
        ></Link>
        <Link
          to="/shop"
          className="clothing__item-img clothing__item-img-five"
        ></Link>
        <Link
          to="/shop"
          className="clothing__item-img clothing__item-img-six"
        ></Link>
      </div>
    </div>
  );
};

export default Carousel;
