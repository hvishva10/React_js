import React from 'react'
import { useState } from 'react'

/* Updating Array in State */
const Update_Array = () => {
    const [name , setName] = useState("")
    const [profile , setProfile] = useState([])

    console.log(name);
    console.log(profile);

    let Ids = 0;

  return (
    <div>
      <input className='p-2 border-2 border-solid border-black rounded-md' value={name} onChange={(e) => setName(e.target.value)} />
      <button className='btn rounded-md' onClick={() => setProfile([...profile  , {
        id:Ids++,
        name:name
      }])}>submit</button>

      <ul>
        {
          profile.map((data) => (<li key={data.id}>{data.name}</li>))
        }
      </ul>
    </div>
  )
}

export default Update_Array
