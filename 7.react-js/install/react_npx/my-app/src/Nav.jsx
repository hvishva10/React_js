import React from 'react';
  
const Nav = () => {
  return(
    <div>
      <div className='navbar'>
        <div className='logo'>
          <a href=''>
            <h1></h1>navbar
          </a>
        </div>
        <div className='nav-item'>
          <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>Pages</a></li>
            <li><a href=''>About Us</a></li>
            <li><a href=''>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>   
  )
}

export default Nav;