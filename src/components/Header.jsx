import React from "react";
import "./styles/header.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <h1>Products</h1>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/order">
              <b>Order</b>
            </Link>
            <Link to="/product">
              <b>Products</b>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
