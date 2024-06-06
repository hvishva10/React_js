import React from 'react'
import { UseAuth } from './Auth'
import { Navigate  } from 'react-router-dom'
import { children } from 'react'

const RequireAuth = () => {
    const auth = UseAuth()

    if(!auth.user){
        return <Navigate to="/login"></Navigate>
    }
  return (
    children
  )
}

export default RequireAuth