import React from 'react'
import { NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul id='nav'>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/create-post">Create Post</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;