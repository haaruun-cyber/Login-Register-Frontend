import React, { useState } from 'react'
import Signup from './Pages/Signup'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Header from './Component/Header'
import Home from './Pages/Home'

const App = () => {
  return (
    <>

    <Routes>
      <Route path="/" element={<Navigate to='/login' />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
    
    </>
  )
}

export default App