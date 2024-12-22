import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  const [showDropdown, setShowDropDown] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(!!storedToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(false);
    navigate('/login');
  };

  return (
    <div className='flex items-baseline justify-between text-lg py-2 mb-5 border-b-4 border-black'>
      <img className='w-20 cursor-pointer' src={assets.gig_logo} alt="GIG Logo" />
      <ul className='hidden md:flex items-start gap-10 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>Home</li>
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>About us</li>
        </NavLink>
      </ul>

      <div className='flex items-center gap-x-4 relative'>
        {token ? (
          <div>
            <img
              className='w-16 h-14 rounded-full border border-black cursor-pointer'
              src={assets.ana_image}
              alt="Profile image"
              onClick={() => setShowDropDown(!showDropdown)}
              aria-expanded={showDropdown}
            />

            {showDropdown && (
              <div className='absoute right-0 mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded-lg'>
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
              onClick={() => navigate('login')}
              className='bg-white text-black border border-black px-4 py-2 rounded-md font-medium hidden md:block'
            >
              Login 
            </button>
            <button
              onClick={() => navigate('/signup')}
              className='bg-black text-white border border-black px-4 py-2 rounded-md font-medium hidden md:block'
            >
              Sign Up   
            </button> 
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar