import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/hot">Hot</NavLink>
        </li>
        <li>
          <NavLink to="/regular">Regular</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
