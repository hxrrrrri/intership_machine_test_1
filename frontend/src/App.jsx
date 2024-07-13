import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Form from './components/Form'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <br />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/form' element={<Form />}></Route>
      </Routes>
    </>
  )
}

export default App
