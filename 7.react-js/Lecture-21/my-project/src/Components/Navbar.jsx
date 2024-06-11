import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const navStyle = ({isActive}) => {
    return{
      color:isActive ? "white" : "black"
    }
  }

  return (
    <div>
      <header>
        <div className="header_logo">
          <Link to="/">
          <img className="logo" src="https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg" alt="logo"/>
          </Link>
        </div>
        <nav className="nav-links">
          <ul>
            <li><NavLink style={navStyle} to="/">Home</NavLink></li>
            <li><NavLink style={navStyle} to="aboutus">AboutUs</NavLink></li>
            <li><NavLink style={navStyle} to="contact">Contact</NavLink></li>
            <li><NavLink style={navStyle} to="shop">shop</NavLink></li>
            <li><NavLink style={navStyle} to="blog">Blog</NavLink></li>
            <li><NavLink style={navStyle} to="product">Product</NavLink></li>
            <li><NavLink style={navStyle} to="user">User</NavLink></li>
          </ul>
        </nav>
      </header>
      
    </div>
  );
};

export default Navbar;
