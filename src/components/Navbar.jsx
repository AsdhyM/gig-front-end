import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();
    const [token, setToken] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false)

    const handleLogout = () => {
        setToken(false);
        navigate('/login');
    };

  return (
    <div className='relative'>
        {/* Navbar */}
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

            {/* Buttons */}
            <div className='flex items-center gap-x-4'>
                {token ? (
                    <div className='absolute top-full right-0 mt-2'>
                        <img 
                            className='w-16 h-14 rounded-full border-none' 
                            src={assets.ana_image} 
                            alt="Profile Icon" 
                            onClick={() => setShowDropdown(!showDropdown)}
                        />
                        {showDropdown && (
                            <div className='absolute right-0 mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded-lg'>
                                <ul className='flex flex-col text-left'>
                                    <li
                                        onClick={() => navigate('/profile')}
                                        className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                                    >
                                        My Profile
                                    </li>
                                    <li
                                        onClick={() => navigate('/history')}
                                        className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                                    >
                                        History
                                    </li>    
                                    <li
                                        onClick={handleLogout}
                                        className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500'
                                    >
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <button 
                            onClick={() => navigate('/login')} 
                            className='bg-white text-black border border-black px-4 py-2 rounded-md font-medium hidden md:block'
                        >
                            Login
                        </button>
                        <button
                            onClick={() => navigate('/signup')}
                            className='bg-black text-white border border-black px-4 py-2 rounded-md font-medium hidden md:block'
                        >
                            Sign up 
                        </button>
                    </>
                )}
            </div>
        </div>
    </div>    
  );
}

export default Navbar