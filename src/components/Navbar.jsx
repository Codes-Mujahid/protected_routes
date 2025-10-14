import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {assets} from '../assets/assets.js'
import { AppContext } from '../context/AppContext.jsx'

const Navbar = () => {
    const {islogged, setIsLogged, setShowUserLogin, setShowUserRegister, navigate} = useContext(AppContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center py-4 border-b border-b-gray-400'>
        <NavLink to={'/'}>
            <img src={assets.logo} alt="" />
        </NavLink>
        <div className='flex gap-8'>
            <NavLink className={'hover:text-green-600'} to={'/'}>Home</NavLink>
            <NavLink className={'hover:text-green-600'} to={'/about'}>About</NavLink>
            {islogged && <NavLink className={'hover:text-green-600'} to={'/products'}>Products</NavLink>}
            {islogged && <NavLink className={'hover:text-green-600'} to={'/products'}>Services</NavLink>}
        </div>
        {!islogged? (<div className='flex gap-8 font-medium'>
            <button onClick={()=>setShowUserRegister(true)} type='button' className='hover:underline cursor-pointer'>Register</button>
            <button onClick={()=>setShowUserLogin(true)} type='button' className='hover:underline cursor-pointer'>Login</button>
        </div>) : (<div className='font-medium'>
            <button onClick={()=>{setIsLogged(false); navigate('/') }} type='button' className='hover:underline cursor-pointer'>Logout</button>
        </div>)}
    </div>
  )
}

export default Navbar