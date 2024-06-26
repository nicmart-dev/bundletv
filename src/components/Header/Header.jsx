import React, { useState } from "react";
import "./Header.scss";
import cartIcon from "../../assets/logo/cart.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="mobile-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img
              src="https://images.ctfassets.net/fikanzmkdlqn/24Npa1YcWK80UQw5IZQunH/1ea5fdb2d1ee84b212ce778e713ab9f4/TELUS_Logo.svg"
              alt="TELUS Logo"
            />
          </Link>
        </div>
        <div className="header-icons">
          <div className="cart-icon">
            <img src={cartIcon} alt="Cart" />
          </div>
          <div className="menu-icon" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <nav className={`mobile-nav ${navOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">My TELUS</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
