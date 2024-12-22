import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate, useLocation } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [token, setToken] = useState(null);

    const isHomePage = location.pathname === '/';
        
    return (
        <div className='flex flex-col items-center justify-center w-full min-h-screen'>
            <div className= 'flex flex-col items-center justify-center w-4/5 max-w-lg rounded-lg'> 
                <img src={assets.gig_logo_black} alt="gig logo black letters" className='w-4/5'/>
            </div>

            {!token && isHomePage && (
                <>
                    <div className='flex gap-4 mb-4'>
                        <button
                            onClick={() => navigate('/login')}
                            className='bg-white text-black border border-black px-8 py-2 rounded-md font-medium w-40 text-center'>
                            Login
                        </button>
                        <button
                            onClick={() => navigate('/signup')}
                            className='bg-black text-white px-8 py-2 rounded-md font-medium w-40 text-center'
                        > Sign up 
                        </button>  
                    </div>
                        <p className='text-gray-600 text-sm'>Not a member?</p>
                </>
            )}

            {token && (
                <div className='flex items-center gap-4 mt-4'>
                    <img 
                        className='w-16 h-14 rounded-full'
                        src={assets.ana_image}
                        alt='"Profile image'
                    />
                </div>   
            )}
        </div>
    )
}

export default Header