import React from 'react'
import { buy_choco } from '../Redux/Choco/ChocoAction'
import { useSelector , useDispatch } from 'react-redux'

const ChocoContainer = () => {
    
    const numOfChocos = useSelector(state => state.choco.numOfChoco)

    const dispatch = useDispatch()
  return (
    <div >
      <h1 className='font-bold text-2xl'>number of chocos :{numOfChocos}</h1>
      <button className='btn' onClick={() => dispatch(buy_choco())}>Decrement</button>
    </div>
  )
}



export default  ChocoContainer
