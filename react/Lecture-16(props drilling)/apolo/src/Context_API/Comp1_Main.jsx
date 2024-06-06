import React from 'react'
import Comp1_A from './Comp1_A'
import { createContext } from 'react'

const data = createContext()
const data1 = createContext()

const Comp1_Main = () => {
    const name = "Vishva"
    const gender = "Female"
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <h1>This Is Component Main</h1>
          <Comp1_A/>
        </data1.Provider>
      </data.Provider>
    </div>
  )
}

export default Comp1_Main
export {data , data1}
