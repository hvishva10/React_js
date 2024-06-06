import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buy_cack } from '../Redux/Cack/CackAction'
const NewContainer = () => {

    const numOfCakes = useSelector(state => state.numOfCake)

    const dispatch = useDispatch()


  return (
    <div>
      <h1>numOfCake : {numOfCakes} </h1>
      <button onClick={() => dispatch(buy_cack())}>Increment</button>
    </div>
  )
}

export default NewContainer