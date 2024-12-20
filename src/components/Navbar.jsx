import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-left justify-between text-sm py-4 mb'>
        <img src={assets.gig_logo} alt="" />
        <ul>
            <NavLink>
                <li>Home</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>About</li>
                <hr />
            </NavLink>
        </ul>
        <div>
            <button>Register</button>
        </div>
    </div>
  )
}

export default Navbar