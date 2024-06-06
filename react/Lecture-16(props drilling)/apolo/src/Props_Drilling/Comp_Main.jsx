import React from 'react'
import Comp_A from './Comp_A'

const Comp_Main = () => {
    const name = "srushti"
  return (
    <div>
      <h1>This Is Component Main</h1>
      <Comp_A name={/*"Vishva"*/name}/>
    </div>
  )
}

export default Comp_Main
