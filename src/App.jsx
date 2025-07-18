import React from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router'
import All from './Routes/All'
import Active from './Routes/Active'
import Completed from './Routes/Completed'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/all'} />} />
      <Route path='/all' element={<All />} />
      <Route path='/active' element={<Active />} />
      <Route path='/completed' element={<Completed />} />
    </Routes>
  )
}

export default App
