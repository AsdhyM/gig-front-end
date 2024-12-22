import React, { useState } from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import UserDashboard from './pages/UserDashboard';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Navbar />
      <Routes>
        <Route path='/' element={isLoggedIn ? <Dashboard /> : <Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/userlogin' element={<UserLogin setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/usersignup' element={<UserSignUp />} />

        <Route path='/serviceproviders' element={<ServiceProviders />} />
        <Route path='/serviceprovidersignup' element={<ServiceProviderSignUp />} />
        <Route path='/serviceproviderlogin' element={<ServiceProviderLogin />} />
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/serviceproviderprofile' element={<ServiceProviderProfile />} />
        <Route path='/services/:serviceproviderId' element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App