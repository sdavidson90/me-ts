import React from "react";
import logo from "PLACEHOLDER";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="header">
      <Link to="/" className="header__left">
        <img className="header__left-home" src={logo} alt="logo" />
      </Link>
      <div className="header__right">
        <Link to="/vancouver" className="header__right-link">
          <h3 className="header__right-item">PLACEHOLDER</h3>
        </Link>
        <Link to="/europe" className="header__right-link">
          <h3 className="header__right-item">PLACEHOLDER</h3>
        </Link>
        <Link to="/tokyo" className="header__right-link">
          <h3 className="header__right-item">PLACEHOLDER</h3>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
