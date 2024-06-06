import React from 'react'
import Navbar from '../Components/Navbar'
import { NavLink, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Eroor404 = () => {
  const navigate1 = useNavigate()

  return (
    <div>
      <h1 className='text-3xl font-normal text-center'>Eroor 404</h1>
      <button onClick={() => navigate1(-1)} className='bg-red
      -500 py-[10px] px-[50px] text-white me-[10px] bg-blue-400'>Go Back
      </button>
      <NavLink to='Contact'>
        <button className='bg-blue-400 py-[10px] px-[50px] text-white'>Contact</button>
      </NavLink>

    </div>
  )
}

export default Eroor404
