import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-baseline justify-between text-lg py-2 mb-5 border-b-4 border-black'>
        <img className='w-20 cursor-pointer' src={assets.gig_logo} alt="Logo" />
        <ul className='hidden md:flex items-start gap-10 font-medium mr-96'>
            <NavLink to='/'>
                <li className='py-1'>Home</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>About</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden' />
            </NavLink>
        </ul>
        <div className='flex items-center gap-x-4'>
            <button className='bg-white text-black border border-black px-4 py-2 rounded-md font-medium md:block'>Login</button>
            <button className='bg-black text-white border border-black px-4 py-2 rounded-md font-medium md:block'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar