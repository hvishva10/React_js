import React from 'react';
  
const Navbar = () => {
  return(
    <div>
      <div className='navbar'>
        <div className='logo'>
          <a href=''>
            <img src='https://tse1.mm.bing.net/th?id=OIP.7eGTdzhGNPvWgnyA7c1ifAHaFj&pid=Api&P=0&h=180' />
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

export default Navbar