import React from "react";
import logo from "../../assets/logo/f7f8ca5a-0f70-43f3-aa33-3fb225ce187b_200x200.png";
import { Link } from "react-router-dom";

const navbar: React.FC = () => {
  return (
    <div className="header">
      <Link to="/shop" className="header__link">
        <h3 className="header__right-item">Home</h3>
      </Link>
      <Link to="/shop" className="header__link">
        <h3 className="header__right-item">Shop</h3>
      </Link>
      <Link to="/about" className="header__link">
        <h3 className="header__right-item">About</h3>
      </Link>
      <Link to="/profile" className="header__link">
        <h3 className="header__right-item">Contact</h3>
      </Link>
    </div>
  );
};

export default navbar;
