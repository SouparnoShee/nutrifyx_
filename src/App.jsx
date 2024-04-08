import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
      </Routes>
      <Footer />
    </>
  )
}

export default App

