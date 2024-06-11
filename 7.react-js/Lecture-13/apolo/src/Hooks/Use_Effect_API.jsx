import React from 'react'
import { useState , useEffect } from 'react'

const Use_Effect_API = () => {
    const[userList , setUserList] = useState([])

    console.log(userList);

    useEffect(() => {
        fetch('https://fakestoreapiserver.reactbd.com/walmart')
        .then((res) => res.json())
        .then((json) => setUserList(json))
    } , [])

  return (
    <div>
      <table>
        <tr>
            {
                userList.map((item) => <div>
                    {item._id}
                </div> )
            }
        </tr>
      </table>
    </div>
  )
}

export default Use_Effect_API


/* Task:- Display 20 productwith image in card view using useeffect hook */
/* task:- display to-do list with use effect hook */
