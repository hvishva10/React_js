import React from 'react'
export const Button = () =>{
    return(
      <>
        <button className='bg-purple-600 px-12 py-2 border-solid border-black border-2 text-white'>Click Me</button>
      </>  
    )
}

export const Button1 = () =>{
    return(
      <>
        <button className='bg-yellow-400 px-12 py-2 border-solid border-black border-2 text-white'>Click Me</button>
      </>  
    )
}

export const Button2 = () =>{
    return(
      <>
        <button className='bg-blue-500 px-12 py-2 border-solid border-black border-2 text-white'>Click Me</button>
      </>  
    )
}

export const Button3 = () =>{
    return(
      <>
        <button className='bg-orange-600 px-12 py-2 border-solid border-black border-2 text-white'>Click Me</button>
      </>  
    )
}

export const Button4 = () =>{
    return(
      <>
        <button className='bg-green-600 px-12 py-2 border-solid border-black border-2 text-white'>Click Me</button>
      </>  
    )
}


const Nested = () => {
  return (
    <div>
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  )
}

export default Nested
