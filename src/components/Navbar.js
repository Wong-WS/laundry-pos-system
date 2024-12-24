import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link to="/NewOrder">New Order</Link>
          </li>
          <li>
            <Link to="/Pickups">Pickups</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;