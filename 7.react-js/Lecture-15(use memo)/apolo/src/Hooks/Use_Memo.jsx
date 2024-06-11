import React from 'react'
import { useState , useMemo } from 'react'

const Use_Memo = () => {

  const [add , setAdd] = useState(0)
  const [count  , setCount] = useState(0)

  function added(){
    console.log('added called');
    return setAdd(add + 1)
  }

  function counter(){
    console.log('counter calling');
    return setCount(count + 10)
  }

  const Multiplication = useMemo(function multi(){
    console.log('multi called');
   return add * 10 
  }, [add])
  
  return (
    <div>
      <h1 className='text-4xl'>React Hook UseMemo</h1>
      <div className='btn'>{Multiplication}</div>
      <div className='btn'>{add}</div>
      <div className='btn'>{count}</div>
       {/*<button className='btn' onClick={() => setAdd(add + 1)}>Click Add</button>
       <button className='btn' onClick={() => setCount(count + 10)}>Click Count</button>*/}
       <button className='btn' onClick={added}>Click Add</button>
       <button className='btn' onClick={counter}>Click Count</button>
    </div>
  )
}

export default Use_Memo
