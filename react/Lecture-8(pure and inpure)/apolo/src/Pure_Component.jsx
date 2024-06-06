import React from 'react'

/*export const Double = ({number}) => {
    return <div>{number}</div>
}*/
let number = 0
export const Double = () => {
    number = number + 1
    return(
        <ol>
            <li>This Number is {number}</li>
        </ol>
    )
}

const Pure_Component = () => {
  return (
    <div>
      <h1>Math Number</h1>
      <Double />
      <Double />
      <Double />
    </div>
  )
}

export default Pure_Component
