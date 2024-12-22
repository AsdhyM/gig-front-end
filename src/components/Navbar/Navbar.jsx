import React, { useState } from 'react'
import {assets} from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul> className='navbar-links'
            <NavLink to='/' className='navbar-item'>
                Home
            </NavLink>
            <NavLink to='/about' className='navbar-item'>
                About Us
            </NavLink>
        </ul>
    </nav>
  );
}

export default Navbar