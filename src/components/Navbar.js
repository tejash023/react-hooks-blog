import React from 'react'
import { NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/create-post">Create Post</NavLink>
    </div>
  )
}

export default Navbar;