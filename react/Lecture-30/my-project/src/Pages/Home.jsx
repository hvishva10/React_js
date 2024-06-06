import React from 'react'

const Home = () => {

  const logout = () => {
    localStorage.removeItem('signUp')
    window.location.reload()
  }

  const deleteAccount = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div className='flex h-screen bg-blue-400 justify-center items-center'>
      <div className='bg-blue-300 p-12 border-4 border-solid border-white'>
        <h1 className='p-2 text-2xl font-bold'>Home Pge</h1>
        <p className='p-2'>Welcome {localStorage.getItem('name')}</p>
        <button className='w-full mt-4 hover:text-white font-bold hover:border-3 hover:border-solid hover:border-black' onClick={logout}>Logout</button>
        <button className='w-full mt-4 hover:text-white font-bold hover:border-3 hover:border-solid hover:border-black' onClick={deleteAccount}>Delete</button>
      </div>
    </div>
  )
}

export default Home
