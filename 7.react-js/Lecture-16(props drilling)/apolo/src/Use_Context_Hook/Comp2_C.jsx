import React, { useContext } from 'react'
import {data , data1} from './Comp2_Main'

const Comp2_C = () => {
  const name = useContext(data)
  const gender = useContext(data1)
  return (
    <div>
      <h1>Hy My Name is {name} And My Gender is {gender}</h1>
    </div>
  )
}

export default Comp2_C

