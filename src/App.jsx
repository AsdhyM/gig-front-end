import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ServiceProviders from './pages/ServiceProviders'
import UserSignUp from './pages/UserSignUp'
import ServiceProviderSignUp from './pages/ServiceProviderSignUp'
import UserLogin from './pages/UserLogin'
import ServiceProviderLogin from './pages/ServiceProviderLogin'
import UserProfile from './pages/UserProfile'
import ServiceProviderProfile from './pages/ServiceProviderProfile'
import About from './pages/About'
import Services from './pages/Services'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className='mx-4 sm:mx-[10%'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/serviceproviders' element={<ServiceProviders />} />
        <Route path='/usersignup' element={<UserSignUp />} />
        <Route path='/serviceprovidersignup' element={<ServiceProviderSignUp />} />
        <Route path='/userlogin' element={<UserLogin />} />
        <Route path='/serviceproviderlogin' element={<ServiceProviderLogin />} />
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/serviceproviderprofile' element={<ServiceProviderProfile />} />
        <Route path='/about' element={<About />} />
        <Route path='/services/:serviceproviderId' element={<Services />} />
      </Routes>

    </div>
  )
}

export default App