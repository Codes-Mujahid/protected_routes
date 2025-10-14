import React, { useContext } from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import Products from './pages/Products'
import About from './pages/About'
import Login from './components/Login'
import Register from './components/Register'
import { AppContext } from './context/AppContext'
import Dashboard from './pages/Dashboard'
import Services from './pages/Services'

const App = () => {
  const {showUserLogin, showUserRegister}= useContext(AppContext)

  return (
    <div className='px-8 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Toaster/>
        {showUserLogin? (<Login/>) : null}
        {showUserRegister? (<Register/>) : null}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/services' element={<Services/>} />
      </Routes>
    </div>
  )
}

export default App