import React from "react";

const instaGallery: React.FC = () => {
  return (
    <div className="insta">
      <div className="insta__title">
        Follow
        <a href="https://www.instagram.com" className="insta__title-link">
          @ThreadsByScott
        </a>{" "}
        on InstaGram
      </div>
      <div className="insta__item">
        <div className="insta__item-img-one"></div>
        <div className="insta__item-img-two"></div>
        <div className="insta__item-img-three"></div>
        <div className="insta__item-img-four"></div>
        <div className="insta__item-img-five"></div>
        <div className="insta__item-img-six"></div>
      </div>
    </div>
  );
};

export default instaGallery;
