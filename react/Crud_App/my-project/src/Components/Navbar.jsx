import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="">
        <div className="header_logo">
          <a href="./index.html">
            <h1 className="text-black text-3xl">L O G O</h1>
          </a>
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">AboutUs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      
    </div>
  );
};

export default Navbar;
