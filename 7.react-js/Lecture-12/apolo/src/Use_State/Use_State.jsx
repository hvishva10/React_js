import React from 'react'
import { useState } from 'react'

const initialState = 10
const Use_State = () => {

    const[Age , setAge] =  useState(initialState)

    function incrementAge(){
        setAge(Age + 3)
        //setAge(Age => Age + 1)
    }

  return (
    <div>
      <div className='btn w-52 mt-2'>{Age}</div>
      <button className='btn mt-2' onClick={incrementAge}>Add Age</button>
    </div>
  )
}

export default Use_State
