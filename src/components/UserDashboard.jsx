import { assertPointerEvents } from "@testing-library/user-event/dist/cjs/utils/index.js";
import React from "react";
import {assets} from "../assets/assets"
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className='max-w-lg mx-auto text-center py-10'>
            <div className='mb-6'>
                <img
                    src={assets.ana_image} 
                    alt="Profile image"
                    className='w-32 h-32 rounded-full mx-auto border-4 border-black object-cover'
                />
                <h1 className='text-2xl font-semibold mt-4'>Ana Smith</h1>
                <p className='text-gray-600'>anasmith@email.com</p>
            </div>

            <div className='flex flex-col items-center gap-4'>
                <button
                    onClick={() => navigate ('/profile')}
                    className='w-full max-w-xs bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'
                >
                    My Profile 
                </button>
                <button
                    onClick={() => navigate ('/history')}
                    className='w-full max-w-xs bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'
                >
                    History
                </button>
                <button
                    onClick={handleLogout}
                    className='w-full max-w-xs bg-red-500 text-white py-2 rounded-md hover:bg-red-600'
                >
                    Logout 
                </button>
            </div>
        </div>
    )
}

export default UserDashboard;