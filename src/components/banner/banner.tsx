import React from "react";
import logo from "../../assets/logo/f7f8ca5a-0f70-43f3-aa33-3fb225ce187b_200x200.png";
import { Link } from "react-router-dom";

const banner: React.FC = () => {
  return (
    <div className="banner">
      <Link to="/">
        <img className="banner__logo" src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default banner;
