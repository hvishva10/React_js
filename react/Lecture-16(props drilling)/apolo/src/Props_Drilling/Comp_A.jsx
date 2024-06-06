import React from 'react'
import Comp_B from './Comp_B'

const Comp_A = ({name}) => {
  return (
    <div>
      <h1>This Is Component A {name}</h1>
      <Comp_B name={/*"Vishva"*/name}/>
    </div>
  )
}

export default Comp_A
