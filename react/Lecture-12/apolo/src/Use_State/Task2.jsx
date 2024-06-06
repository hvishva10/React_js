import { useState } from 'react';

export default function Counter1() {
  const [age, setAge] = useState(42);

  function increment() {
    setAge(a => a + 1);
  }

  return (
    <>
      <div className='mt-8'>
      <h1 className='btn w-52'>Your age: {age}</h1>
      <button className='btn mt-2' onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <button className='btn' onClick={() => {
        increment();
      }}>+1</button>
      </div>
    </>
  );
}
