import React from 'react'
import {data , data1} from './Comp1_Main'

const Comp1_C = () => {
  return (
    <div>
      <data.Consumer>
        {
          (name) => {
            return(
              <>
              <data1.Consumer>
                {
                  (gender) => {
                    return(
                      <>
                        <h1>Hy My Name is {name} And My Gender is {gender}</h1>
                      </>
                    )
                  }
                }
              </data1.Consumer>
              </>
            )
          }
        }
      </data.Consumer>
    </div>
  )
}

export default Comp1_C
