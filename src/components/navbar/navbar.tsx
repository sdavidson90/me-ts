import React from "react";
import logo from "../../../public/logo192.png";
import { Link } from "react-router-dom";

const navbar: React.FC = () => {
  return (
    <div className="header">
      <Link to="/" className="header__left">
        <img className="header__left-home" src={logo} alt="logo" />
      </Link>
      <div className="header__right">
        <Link to="/shop" className="header__right-link">
          <h3 className="header__right-item">Shop</h3>
        </Link>
        <Link to="/about" className="header__right-link">
          <h3 className="header__right-item">About</h3>
        </Link>
        <Link to="/profile" className="header__right-link">
          <h3 className="header__right-item">Profile</h3>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
