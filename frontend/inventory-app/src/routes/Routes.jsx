import React from 'react';
import { Routes, Route } from "react-router-dom"
import Landing from '../components/Landing';
import Login from '../components/Login/Login';

const RoutesContainer = () => {
  return (
    <Routes>
        {/* <Route path="/" element={ <Home/> } /> */}
        <Route path="landing" element={ <Landing/> } />
        <Route path="login" element={ <Login/> } />
      </Routes>
  )
}

export default RoutesContainer