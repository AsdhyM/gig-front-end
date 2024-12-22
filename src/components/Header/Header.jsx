import React, { useState } from 'react'
import './header.css';
import { assets } from '../../assets/assets'
import { NavLink, useNavigaten } from 'react-router-dom'

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();


    return (
        <header className='header'>
            <div className='jeader-logo'>
                <img src={assets.gig_logo_black} alt="GIG logo" />
            </div>
            <div className='header-links'>
                {!isLoggedIn ? (
                    <>
                        <button className='btn-login' onClick={() => navigate('login')}>
                            Login
                        </button>
                        <button className='btn-signup' onClick={() => navigate('signup')}>
                            Sign Up 
                        </button>
                    </>
                ) : (
                    <div className='profile-dropdown'>
                        <img
                            src={assets.ana_image}
                            alt="Profile picture"
                            className='profile_image'
                        />
                        <ul className='dropdown-menu'>
                            <li onClick={() => navigate('/profile')}>My Profile</li>
                            <li onClick={() => navigate('/history')}>History</li>
                            <li onClick={() => setIsLoggedIn(false)}>Logout</li>
                        </ul>
                    </div> 
                )}
            </div>
        </header>
    )
}

export default Header