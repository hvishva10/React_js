import React from 'react'
import Comp2_A from './Comp2_A'
import { createContext } from 'react'

const data = createContext()
const data1 = createContext()

const Comp2_Main = () => {
    const name = "Vishva"
    const gender = "Female"
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <h1>This Is Component Main</h1>
          <Comp2_A/>
        </data1.Provider>
      </data.Provider>
    </div>
  )
}

export default Comp2_Main
export {data , data1}