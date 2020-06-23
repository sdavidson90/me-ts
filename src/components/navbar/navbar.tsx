import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="header">
      <Link to="/" className="header__link">
        <h3>Home</h3>
      </Link>
      <Link to="/shop" className="header__link">
        <h3>Shop</h3>
      </Link>
      <Link to="/about" className="header__link">
        <h3>About</h3>
      </Link>
      <Link to="/contact" className="header__link">
        <h3>Contact</h3>
      </Link>
    </div>
  );
};

export default Navbar;
