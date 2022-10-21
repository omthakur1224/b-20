import React from 'react'
import { useDispatch } from 'react-redux'

const Login = () => {
    const dispacth=useDispatch();
  return (
    <div>
      <input type="text" />
      <input type="password"/>
    </div>
  )
}

export default Login
