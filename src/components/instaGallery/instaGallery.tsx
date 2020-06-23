import React from "react";

const instaGallery: React.FC = () => {
  return (
    <div className="insta">
      <a
        href="https://www.instagram.com"
        className="insta__title-link insta__title"
      >
        Follow @ThreadsByScott on InstaGram
      </a>
      <div className="insta__item">
        <div className="insta__item-img insta__item-img-one"></div>
        <div className="insta__item-img insta__item-img-two"></div>
        <div className="insta__item-img insta__item-img-three"></div>
        <div className="insta__item-img insta__item-img-four"></div>
        <div className="insta__item-img insta__item-img-five"></div>
        <div className="insta__item-img insta__item-img-six"></div>
        <div className="insta__item-img insta__item-img-seven"></div>
        <div className="insta__item-img insta__item-img-eight"></div>
        <div className="insta__item-img insta__item-img-nine"></div>
      </div>
    </div>
  );
};

export default instaGallery;
