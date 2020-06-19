import React from "react";
import logo from "../../assets/logo/7efcd702-a492-4237-bb3c-d88bd20cadc7_200x200.png";
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
