import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const result = useSelector((state) => state.Reducer);
  console.warn("HeaderData called", result);
  return (
    <div className="h-24 bg-blue-500 text-white flex justify-between items-center px-20">
      <NavLink to="/">shop</NavLink>
      <NavLink to="/Cart">
        <div>
          <FontAwesomeIcon icon={faCartShopping}/>
          <span>{result.length}</span>
        </div>
      </NavLink>
    </div>
  );
};

export default Header;
