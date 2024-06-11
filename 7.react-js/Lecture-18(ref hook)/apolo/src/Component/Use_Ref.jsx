import React from 'react'
import { useRef , useState } from 'react'

/* Use Ref Hook in React */

/* Dom Manupliation */
const Use_Ref = () => {
  const [name , setName] = useState('vishva')

    const refElement = useRef('')
    const NewRefElement = useRef()

    console.log(refElement);

    function ResetName(){
      setName('')  
      refElement.current.focus()
    }

    function  ApplyBgColor(){
      NewRefElement.current.style.backgroundColor = "orange"
    }

  return (
    <div>
      <div className='flex justify-center'>
        <div>
          <div ref={NewRefElement} className='h-96 w-96'></div>
          <input ref={refElement} className='border-2 border-solid p-3 rounded-lg border-black' type='text' value={name} onChange={(e) => setName(e.target.value)}/>
          <button className='btn rounded-md' onClick={ResetName}>Reset</button>
          <button className='btn rounded-md' onClick={ApplyBgColor}>Click Me</button>
        </div>
      </div>
    </div>
  )
}

export default Use_Ref
