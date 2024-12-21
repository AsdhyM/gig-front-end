import React from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();
  return (
    <div className='flex items-baseline justify-between text-lg py-2 mb-5 border-b-4 border-black'>
        <img className='w-20 cursor-pointer' src={assets.gig_logo} alt="Logo" />
        <ul className='hidden md:flex items-start gap-10 font-medium mr-96'>
            <NavLink to='/'>
                <li className='py-1'>Home</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>About us</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto' />
            </NavLink>
        </ul>
        <div className='flex items-center gap-x-4'>
            <button onClick={()=>navigate('/login')} className='bg-white text-black border border-black px-4 py-2 rounded-md font-medium hidden md:block'>Login</button>
            <button onClick={()=>navigate('/signup')} className='bg-black text-white border border-black px-4 py-2 rounded-md font-medium hidden md:block'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar