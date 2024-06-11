import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {

    const navigate = useNavigate()
  return (
    <div>
        <Navbar />
      <span>Order Confirmed!!!</span><br></br>
      <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  )
}

export default OrderSummary
