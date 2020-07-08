import React from "react";
import {  NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div>
        <h2 className="logo">MOB STORE</h2>
        <ul>
          <li>
            <NavLink to="/">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
