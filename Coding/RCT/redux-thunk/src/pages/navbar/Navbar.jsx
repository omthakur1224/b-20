import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
        <Link to={'/home'}>HOME</Link>
        <Link to={'/posts'}>POSTS</Link>
        <Link to={'/feeds'}>FEEDS</Link>
    </div>
  )
}

export default Navbar